'use client'

import Image from "next/image";
import * as Style from "./index.styled";
import img from '../../../public/poster.jpeg'
import Link from "next/link";

const Preview = () => {
    return (
        <>
        <Style.Structure>
            <Style.TextContent>
                <Style.Heding>
                    ShowHub
                </Style.Heding>
                <Style.Subtitle>
                    enjoy watching
                </Style.Subtitle>
                <Style.Desctiption>
                        Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing elit, sed diam nonummy nibh euismod 
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                        Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, 
                        quis nostrud exerci
                </Style.Desctiption>
                <Link href="/films" style={{width: 'fit-content'}}>
                    <Style.Button>
                        start now
                    </Style.Button>
                </Link>
                
            </Style.TextContent>

            <Style.ImageWrapp>
            <Image
                alt='brave poster'
                src={img}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                />
            </Style.ImageWrapp>
        </Style.Structure>
           
        </>
    )
}

export default Preview;