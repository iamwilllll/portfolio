import type { MessagesT } from '../types';
import { useFormSuccess } from '../context/store';
import { Container, ContactForm, ContactInformation } from '../components';

const messages: MessagesT = {
    success: 'Thank you very much for contacting me. I have received your message and will respond as soon as possible.',
    error: 'Oops! There was a problem sending your message. Please try again in a moment.',
};

export function ContactMe() {
    const { isSuccess, wasMistake } = useFormSuccess();

    return (
        <Container id="contact" className="flex items-center lg:items-center lg:gap-5">
            <ContactInformation />

            <section className="border-default-border text-primary-text mx-auto w-full rounded-xl border p-6 shadow-lg lg:w-6/10">
                {(isSuccess || wasMistake) && (
                    <div
                        className={
                            'mb-4 rounded-xl border p-3 ' +
                            ` ${isSuccess ? 'border-green-200 text-green-400' : 'border-red-200 text-red-400'}`
                        }
                    >
                        {isSuccess ? messages.success : messages.error}
                    </div>
                )}

                <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
                <p className="mb-6 text-sm">Fill out the form and I will get back to you as soon as possible.</p>
                <ContactForm />
            </section>
        </Container>
    );
}
