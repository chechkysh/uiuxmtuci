import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./SliderCard.styled";
import star from '@/../public/Star.svg'
import starHalf from '@/../public/StarHalf.svg'
import Image from "next/image";
import icon from '@/../public/stormtropper.png'
const SliderCard: React.FC<MovieList> = (props) => {

  let descr = ''
  descr += props.description_full.length > 0 ? 
    props.description_full.slice(0, 50) + '...' : 
    ''

  const stars = Math.round((props.rating / 2) * 10) / 10

  const starsItems = []
  for (let i = 0; i < Math.round(stars); i++) {
    starsItems.push(<Image src={star} alt={`1`}/>)
    
  }
  if (stars > Math.round(stars)){
    starsItems.push(<Image src={starHalf} alt={`.5`}/>)
  }

  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Rating>
                <Style.RatingIcon>
                  <VscStarFull />
                </Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              
            </Style.Card2>

            
          </Style.Cards>
          
        </Style.Content>
        
      </Link>
      <Style.RaitingItem>
              {props.rating}
              <Image src={icon} height={16} width={16} alt='icon' style={{color:"white", marginLeft: "6px"}}/>
            </Style.RaitingItem>

            <Style.Title>{props.title}</Style.Title>
            <Style.RaitingIcons>
            {starsItems} 
            </Style.RaitingIcons>
            <Style.DateRelease>
              {props.year}
            </Style.DateRelease>
            <Style.Description>
              {descr}
            </Style.Description>
              
    </Style.Film>
  );
};

export default SliderCard;
