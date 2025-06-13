import { useFormStatus } from "react-dom";
import { Save } from "lucide-react";

export default function SubmitButton({ title,className }) {
    const {pending} = useFormStatus();

    return(
        <div>
         <button className= {className} type='submit' disabled= {pending}> {pending ? "loading": title }< Save className='w-4 h-4' /></button>
        </div>
    )
}