import path from 'path';
import fs from 'fs';
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import terser from 'gulp-terser';
import sharp from 'sharp';

export function js(done) {
    // Incluir archivos .js
    src('src/scripts/**/*.js').pipe(terser()).pipe(dest('build/js'));

    // Incluir archivos .json
    src('src/scripts/**/*.json').pipe(dest('build/js')); // O cambiar el destino según tu necesidad

    done();
}

export function css(done) {
    src('src/styles/main.scss', { sourcemaps: true })
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export async function crop(done) {
    const inputFolder = 'src/assets/images';
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
            await sharp(inputFile).resize(width, height, { fit: 'cover', position: 'centre' }).toFile(outputFile);

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
    watch('src/styles/**/*.scss', css);
    watch('src/scripts/**/*.js', js);
}

export default series(crop, js, css, dev);
