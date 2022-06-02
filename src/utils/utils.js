export const decdegToHms = (decdeg) => {
    let d = Math.floor(decdeg)
    const minfloat = (decdeg - d) * 60
    let m = Math.floor(minfloat)
    const secfloat = (minfloat - m) * 60
    let s = Math.floor(secfloat)
    if (s === 60) {
        m++
        s = 0
    }
    if (m === 60) {
        d++
        m = 0
    }

    const dmc = d < 10 || m < 10 || s < 10 
    ? `${d.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
    : `${d}:${m}:${s}`

    return isNaN(d || m || s) ? `00:00:00` : dmc
}

export const decTimeToHms = (ra) => {
    if(!ra) return '00:00:00'
    const date = new Date(0, 0)
    date.setSeconds(+ra * 60 * 60)
    
    return date.toTimeString().slice(0, 8)
}

export const floorData = (number, range = 100) => Math.floor(number * range) / range

export const roundData = (number) => Math.round(number * 100) / 100

export const toFixedNum = (number, decimals = 2) => (+number).toFixed(decimals)

export const useWhenEmpty = (data, name) => !data ? name : data

export const whenNaN = (number) => isNaN(number) ? 'Loading' : number