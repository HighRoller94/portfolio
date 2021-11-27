import React from 'react'
import { motion } from 'framer-motion';

function Cook() {
    return (
        <motion.div 
            className="cook__page"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
        >
        <h1>COOK</h1>
            <p>Aliquip officia cupidatat anim voluptate eu consectetur ipsum. Esse in do pariatur velit eu esse nulla fugiat exercitation fugiat. Excepteur mollit adipisicing commodo pariatur consequat excepteur aliquip. Deserunt quis amet nisi laboris veniam duis sit in non id velit culpa. Aute sit cillum cillum velit deserunt. Consectetur elit occaecat enim labore incididunt mollit proident amet anim dolore labore. Amet pariatur occaecat non adipisicing qui ullamco sit minim laborum tempor. Sunt esse Lorem irure amet. Do adipisicing enim qui ipsum ut est ad. Est incididunt ullamco dolore deserunt mollit incididunt commodo sunt voluptate. Ad et ad dolore veniam eu nisi incididunt.</p>
        </motion.div>
    )
}

export default Cook
