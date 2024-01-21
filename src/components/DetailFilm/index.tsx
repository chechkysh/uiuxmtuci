import * as Style from "./index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import star from '@/../public/Star.svg'
import starHalf from '@/../public/StarHalf.svg'
import imdb from '@/../public/imdb.png'
import back from '@/../public/btn - Previous.svg'

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import Loader from "../Loader";
import Image from "next/image";
import Comments from "./Comments";
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading || filmRetrieve == undefined) {
    return <Loader />;
  }

  const props = filmRetrieve.data.movie
  const stars = Math.round((props.rating / 2) * 10) / 10

  const starsItems = []
  for (let i = 0; i < Math.round(stars); i++) {
    starsItems.push(<Image src={star} alt={`1`}/>)
    
  }
  if (stars > Math.round(stars)){
    starsItems.push(<Image src={starHalf} alt={`.5`}/>)
  }

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={props.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>
            <Style.BackHome>
              <Image src={back} alt='back arrow'/>
              Back to Home
            </Style.BackHome>
          </Link>
        </Style.ContentTitle>

        <Style.Data>

          <Style.LeftContent>

            <Style.Title>
              {props.title}
            </Style.Title>

            <Style.RaitingIcons>
            {starsItems} 
            </Style.RaitingIcons>
            <Style.Title>
              {props.like_count} likes
            </Style.Title>

            <Style.IMDbImage>
              <Image src={imdb} alt='imdb'/>
            </Style.IMDbImage>

            <Style.Description>
              {props.description_full}
            </Style.Description>
          </Style.LeftContent>

          <Style.CardImage src={props.medium_cover_image} alt='card image'/>
        </Style.Data>
        {props != undefined && (
            <>
              <Style.CommentsTitle>
                Comments
              </Style.CommentsTitle>
              <Comments PersonKey={props.id}/>
            </>

        )}
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
