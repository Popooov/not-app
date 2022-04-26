export const scaleTypes = (scaleType, scaleName) => {
    const yScales = {
        'Auto': [],
        '0.5 arcsec': [-0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],   
        '1 arcsec': [-1, -0.5, 0, 0.5, 1],
        '2 arcsec': [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
        '3 arcsec': [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3],
        'Guide Intensity': [0, 0.5, 1, 1.5, 2]
    }
    
    const xScales = {
        '1 min': [-60, -30, 0],
        '5 mins': [-300, -250, -200, -150, -100, -50, 0],
        '15 mins': [-900, -750, -600, -450, -300, -150, 0],
        '30 mins': [-1800, -1500, -1200, -900, -600, -300, 0],
        '60 mins': [-3600, -3300, -3000, -2700, -2400, -2100, -1800, -1500, -1200, -900, -600, -300, 0]
    }
    
    if(scaleType === 'y') return yScales[scaleName]
    if(scaleType === 'x') return xScales[scaleName]
}

export const scaleNames = (scaleName) => {
    const yScalesNames = ['Auto', '0.5 arcsec', '1 arcsec', '2 arcsec', '3 arcsec']
    const xScalesNames = ['1 min', '5 mins', '15 mins', '30 mins', '60 mins']
    
    if(scaleName === 'y') return yScalesNames
    if(scaleName === 'x') return xScalesNames
}

export const floorData = (number) => Math.floor(number * 100) / 100

export const decdegToHms = (decdeg) => {
    let d = Math.floor (decdeg)
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

    return `${d}:${m}:${s}`
}

export const decTimeToHms = (ra) => {
    const date = new Date(0,0)
    date.setSeconds(+ra * 60 * 60)

    return date.toTimeString().slice(0, 8)
}

export const useWhenEmpty = (data, name) => !data ? name : data

export const telescopeModes = (data) => {
    if(data === 1) {
        return 'Idle'
    } else if (data === 2) {
        return 'Moving'
    } else if (data === 3) {
        return 'Slewing'
    } else if (data === 4) {
        return 'Tracking'
    } else {
        return 'Power Off'
    }

}
export const autoguiderModes = (data) => {
    if(data === 1) {
        return 'Moving Box'
    } else if (data === 2) {
        return 'Center Box'
    } else if (data === 3) {
        return 'Guiding Lost'
    } else {
        return 'Not Guiding'
    }
}