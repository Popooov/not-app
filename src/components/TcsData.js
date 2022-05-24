import { whenNaN } from "../utils/utils"
export const TcsData = ({type, name, data, styles = {}}) => {

    if (type === "label") {
        if(name) {
            return <text>{name}: {whenNaN(data)}</text>
        } else {
            return <text>{whenNaN(data)}</text>
        }
    } else {
        if (type === 'StatusBox') {
            if(typeof data === 'number') {
                return <p className={styles}>{name}: {whenNaN(data)}</p> 
            } else {
                return <p className={styles}>{name}: {data}</p>
            }
        } else {
            if(typeof data === 'number') {
                return <div className={`${styles} flex flex-row justify-between`}><p>{name}:</p><p>{whenNaN(data)}</p></div> 
            } else {
                return <div className={`${styles} flex flex-row justify-between`}><p>{name}:</p><p>{data}</p></div>
            }
        }
    }
}