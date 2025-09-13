import { useSnapshot } from "valtio"
import state from "../store"

const CustomButton = ({ customStyles, handleClick, type, title }) => {
    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#FFFFFF',
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: '#000000',
                backgroundColor: 'transparent',
            }
        } else {
            return {}
        }
    }

    return (
        <button
            className={`px-2 py-1.2 flex-1 rounded-md cursor-pointer ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button >
    )
}

export default CustomButton