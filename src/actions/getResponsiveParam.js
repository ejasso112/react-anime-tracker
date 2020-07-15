let getResponsiveParam = (windowWidth, breakpoints, classNames) => {
    if(windowWidth <= breakpoints[0]) {
        return classNames[0]
    }
    else if(windowWidth > breakpoints[breakpoints.length -1]) {
        return classNames[classNames.length -1]
    }
    else {
        for(let i = 1; i < breakpoints.length; i++) {
            if(windowWidth <= breakpoints[i] && windowWidth > breakpoints[i-1]) {
                return classNames[i]
            }
        }
    }
}

export default getResponsiveParam