export const TcsData = ({type, name, data, styles = {}}) => {
    return (
       type === 'label' ? 
        (name ? <text>{name}: {data}</text> : <text>{data}</text>)
        : 
        (name ? <p className={styles}>{name}: {data}</p> : <p className={styles}>{data}</p>)
    )
}