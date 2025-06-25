import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
});