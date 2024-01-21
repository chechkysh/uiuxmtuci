'use client'
import { useFilmsUpcoming } from '@/lib/hooks/useFilmsUpcoming';
import SliderCard from '../Cards/SliderCard';
import * as Styled from './index.styled'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useFilmsPopular } from '@/lib/hooks/usePopularFilms';


const PopularFilms = () => {

    const { filmList, isLoading } = useFilmsPopular('1', '50');

    const filmsList = filmList?.data.movies?.map((film) => {
        return (
        
            <SwiperSlide key={film.id}>
                <SliderCard  {...film}></SliderCard>
            </SwiperSlide>
        )
    });

    if (isLoading) {
        return;
    }

    

    return (
        <Styled.Content>
        

        <Styled.Title>Popular films</Styled.Title>
        

        <Styled.Container>

        

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={70}
                slidesPerView={5}
                freeMode={true}
                navigation
                pagination={false}
                scrollbar={{ draggable: true }}
            >
                {filmsList}
            </Swiper>
        </Styled.Container>
        </Styled.Content>
        
    )
}

export default PopularFilms