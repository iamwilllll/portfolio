import { useForm } from 'react-hook-form';
import type { FormDataT, MessagesT } from '../types';
import { useLoading, useFormSuccess } from '../context/store';
import { useSubmitForm } from '../hooks/useSubmitForm';
import { SocialLinks, Container, ErrorItem } from '../components';

const messages: MessagesT = {
    success: 'Thank you very much for contacting me. I have received your message and will respond as soon as possible.',
    error: 'Oops! There was a problem sending your message. Please try again in a moment.',
};

export function ContactMe() {
    const { isLoading } = useLoading();
    const { isSuccess, wasMistake } = useFormSuccess();
    const { submitForm } = useSubmitForm();

    const { register, handleSubmit, formState, reset } = useForm<FormDataT>();
    const { errors } = formState;

    const onsubmit = async (data: FormDataT) => {
        await submitForm(data);
        reset();
    };

    return (
        <Container id="contact" className="flex items-center lg:items-center lg:gap-5">
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

            <section className="border-default-border text-primary-text mx-auto w-full rounded-2xl border p-6 shadow-lg lg:w-6/10">
                {(isSuccess || wasMistake) && (
                    <div
                        className={
                            'mb-4 rounded-lg border p-3 ' +
                            ` ${isSuccess ? 'border-green-200 text-green-400' : 'border-red-200 text-red-400'}`
                        }
                    >
                        {isSuccess ? messages.success : messages.error}
                    </div>
                )}

                <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
                <p className="mb-6 text-sm">Fill out the form and I will get back to you as soon as possible.</p>

                <form noValidate onSubmit={handleSubmit(onsubmit)}>
                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Name</span>

                        <input
                            id="name"
                            type="text"
                            className={
                                'text-primary-text mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
                                `${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-default-border focus:border-brand'}`
                            }
                            {...register('name', { required: 'This field is required' })}
                        />

                        {errors.name && <ErrorItem>{errors.name.message}</ErrorItem>}
                    </label>

                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Email</span>
                        <input
                            id="email"
                            type="email"
                            className={
                                'text-primary-text mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
                                `${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-default-border focus:border-brand'}`
                            }
                            {...register('email', {
                                required: 'This field is required',
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid Email' },
                            })}
                        />

                        {errors.email && <ErrorItem>{errors.email.message}</ErrorItem>}
                    </label>

                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Message</span>
                        <textarea
                            id="information"
                            rows={5}
                            className={
                                'text-primary-text mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
                                `${errors.information ? 'border-red-400 focus:ring-red-200' : 'border-default-border focus:border-brand'}`
                            }
                            {...register('information', { required: 'This field is required' })}
                        />
                        {errors.information && <ErrorItem>{errors.information.message}</ErrorItem>}
                    </label>

                    <div className="flex items-center justify-start">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={
                                'text-primary-text inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
                                `${isLoading ? 'bg-brand cursor-wait opacity-50' : 'bg-brand hover:bg-brand hover:opacity-80'}`
                            }
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </section>
        </Container>
    );
}
