

export function viewPort() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    function oneMachine() {
        if(width<=480) {
            const phone = true;
            const tablet = false;
            const desktop = false;
            return {phone ,tablet ,desktop}
        }else if( 480 < width && width <= 768 ) {
            const phone = false;
            const tablet = true;
            const desktop = false;
            return {phone ,tablet ,desktop}
        }else if( 768 < width ) {
            const phone = false;
            const tablet = false;
            const desktop = true;
            return {phone ,tablet ,desktop}
        }
    }
        function moreMachine() {
        if(width<=480) {
            const phone = true;
            const tablet = false;
            const desktop = false;
            return {phone ,tablet ,desktop}
        }else if( width <= 768 ) {
            const phone = true;
            const tablet = true;
            const desktop = false;
            return {phone ,tablet ,desktop}
        }else if( width < 768 ) {
            const phone = true;
            const tablet = true;
            const desktop = true;
            return {phone ,tablet ,desktop}
        }
    }

    return { width ,height ,oneMachine ,moreMachine }
}