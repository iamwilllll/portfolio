import { useForm } from 'react-hook-form';
import type { FormDataT } from '../types';
import { useLoading } from '../context/store';
import { useSubmitForm } from '../hooks/useSubmitForm';
import { ErrorItem } from '../components';

type ContactFormProps = { className?: string };

export function ContactForm({ className }: ContactFormProps) {
    const { isLoading } = useLoading();
    const { submitForm } = useSubmitForm();

    const { register, handleSubmit, formState, reset } = useForm<FormDataT>();
    const { errors } = formState;

    const onsubmit = async (data: FormDataT) => {
        await submitForm(data);
        reset();
    };

    return (
        <form noValidate onSubmit={handleSubmit(onsubmit)} className={`${className}`}>
            <label className="mb-4 block">
                <span className="text-sm font-medium">Name</span>

                <input
                    id="name"
                    type="text"
                    className={
                        'text-primary-text mt-1 block w-full rounded-xl border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
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
                        'text-primary-text mt-1 block w-full rounded-xl border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
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
                        'text-primary-text mt-1 block w-full resize-none rounded-xl border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ' +
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
    );
}
