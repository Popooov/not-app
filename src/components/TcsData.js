import { whenNaN } from "../utils/utils"
export const TcsData = ({type, name, data, state = '', time = '', styles = {}}) => {

    return (
       type === 'label' ? 
        (name ? <text>{name}: {whenNaN(data)}</text> : <text>{whenNaN(data)}</text>)
        : 
        (name ? <p className={styles}>{name}: {state || time ? state || time : whenNaN(data)}</p> : <p className={styles}>{state || time ? state || time : whenNaN(data)}</p>)
    )
}