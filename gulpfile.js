import path from 'path';
import fs from 'fs';
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import terser from 'gulp-terser';
import sharp from 'sharp';

export function js(done) {
    src('src/js/app.js').pipe(terser()).pipe(dest('build/js'));
    done();
}

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export async function crop(done) {
    const inputFolder = 'assets/images';
    const outputFolder = 'build/img/';
    const width = 250;
    const height = 180;

    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg|png)$/i.test(path.extname(file));
    });

    try {
        for (const file of images) {
            const inputFile = path.join(inputFolder, file);
            const outputFile = path.join(outputFolder, file); // Imagen redimensionada
            const outputWebP = path.join(outputFolder, path.parse(file).name + '.webp'); // Versión WebP

            // Procesar imagen en su formato original
            await sharp(inputFile)
                .resize(width, height, { fit: 'cover', position: 'centre' })
                .toFile(outputFile);

            // Convertir a WebP
            await sharp(inputFile)
                .resize(width, height, { fit: 'cover', position: 'centre' })
                .toFormat('webp', { quality: 80 }) // Calidad 80%
                .toFile(outputWebP);
        }

        done();
    } catch (error) {
        console.log('Error al procesar imágenes:', error);
    }
}

export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

export default series(crop, js, css, dev);
