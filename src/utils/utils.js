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

    const xyScales = {
        '0.1 arcsec': [-0.1, -0.05, 0, 0.05, 0.1],
        '0.3 arcsec': [-0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3],
        '0.5 arcsec': [-0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],
        '1 arcsec': [-1, -0.5, 0, 0.5, 1],
        '2 arcsec': [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
        '3 arcsec': [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3],
    }

    const dataScales = {
        'Fiber Guider': ['Xfilter', 'Yfilter', 'Fiber Guider', 0.24],
        'Guide-star Contrast': ['AutoguiderContrast', '', 'Guide-star Contrast'],
        'Alt/Az Errors': ['AltitudePosErrArcsec', 'AzimuthPosErrArcsec', 'Alt/Az Errors'],
        'Guide-star FWHM': ['GeneralParameter186', 'GeneralParameter187', 'Guide-star FWHM (GenPar186/187)'],
        'ObjectPointedToDECdegrees': ['ObjectPointedToDECdegrees', '', 'ObjectPointedToDECdegrees'],
    }
    
    if(scaleType === 'y') return yScales[scaleName]
    if(scaleType === 'x') return xScales[scaleName]
    if(scaleType === 'xy') return xyScales[scaleName]
    if(scaleType === 'dataScales') return dataScales[scaleName]
}

export const scaleNames = (scaleName) => {
    const yScalesNames = ['Auto', '0.5 arcsec', '1 arcsec', '2 arcsec', '3 arcsec']
    const xScalesNames = ['1 min', '5 mins', '15 mins', '30 mins', '60 mins']
    const xyScalesNames = ['0.1 arcsec', '0.3 arcsec','0.5 arcsec', '1 arcsec', '2 arcsec', '3 arcsec']
    const chartNames = ['Fiber Guider', 'Guide-star Contrast', 'Alt/Az Errors', 'Guide-star FWHM', 'ObjectPointedToDECdegrees']
    
    if(scaleName === 'y') return yScalesNames
    if(scaleName === 'x') return xScalesNames
    if(scaleName === 'xy') return xyScalesNames
    if(scaleName === 'chartNames') return chartNames
}

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