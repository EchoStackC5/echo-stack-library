import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {
    const {pending} = useFormStatus();

    return(
        <div>
         <button className='w-full bg-primary border border-primary text-white justify-center flex items-center gap-2 rounded-full font-normal text-lg py-2   cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 active:scale-95 ' type='submit' disabled= {pending}>< Save className='w-4 h-4' />{title}</button>
        </div>
    )
}