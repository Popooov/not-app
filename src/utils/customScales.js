export const scaleTypes = (scaleType, scaleName) => {
    const yScales = {
        '0.5 arcsec': [-0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],   
        '1 arcsec': [-1, -0.5, 0, 0.5, 1],
        '2 arcsec': [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2],
        '3 arcsec': [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3],
        'auto': []
    }
    
    const xScales = {
        '5 min': [-300, -250, -200, -150, -100, -50, 0],
        '15 min': [-900, -750, -600, -450, -300, -150, 0],
        '30 min': [-1800, -1500, -1200, -900, -600, -300, 0],
        '60 min': [-3600, -3300, -3000, -2700, -2400, -2100, -1800, -1500, -1200, -900, -600, -300, 0]
    }
    
    if(scaleType === 'y') return yScales[scaleName]
    if(scaleType === 'x') return xScales[scaleName]
}

export const scaleNames = (scaleName) => {
    const yScalesNames = ['0.5 arcsec', '1 arcsec', '2 arcsec', '3 arcsec', 'auto']
    const xScalesNames = ['5 min', '15 min', '30 min', '60 min']
    
    if(scaleName === 'y') return yScalesNames
    if(scaleName === 'x') return xScalesNames
}