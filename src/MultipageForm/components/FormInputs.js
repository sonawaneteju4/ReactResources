import useFormContext from "../context/useFormContext"
import Address from "./Address"
import SendEmail from "./SendEmail"
import UserInfo from "./UserInfo"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <UserInfo />,
        1: <Address />,
        2: <SendEmail />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs