export const TcsData = ({type, name, data, styles = {}}) => {
    return (
       type === 'label' ? 
        <text>{name}: {data}</text>
        : 
        <p className={styles}>{name}: {data}</p>
    )
}