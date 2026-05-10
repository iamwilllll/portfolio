import { SocialLinks } from '../components';

export function ContactInformation() {
    return (
        <section className="hidden w-5/10 gap-3 lg:flex lg:flex-col">
            <h2 className="text-primary-text text-4xl font-bold">Get in touch.</h2>
            <h3 className="text-primary-text text-1xl font-light">i'd like to hear from you!</h3>
            <h3 className="text-primary-text text-1xl font-light">
                If you have inquiries or just want to say hi, please use the contact form!
            </h3>

            <button
                id="email"
                className="text-primary-text text-center underline transition hover:scale-105"
                title="copy email"
                aria-label="copy email"
                onClick={() => navigator.clipboard.writeText('wilfrynbusiness@gmail.com')}
            >
                wilfrynbusiness@gmail.com
            </button>
            <div className="m-auto flex">
                <SocialLinks className="text-brand" />
            </div>
        </section>
    );
}
