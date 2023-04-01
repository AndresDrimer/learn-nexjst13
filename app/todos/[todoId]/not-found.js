import Image from "next/image"

import image404 from '../../../public/404-Illustration.png'

function NotFound() {
  return (
    <>
    <Image src={image404} alt="" width="500" height="500" placeholder="blur" className="w-[50%] m-auto "/>
    <div className='text-3xl text-center py-12'>Wooops... we could´n find your to do</div>
 </> )
}

export default NotFound