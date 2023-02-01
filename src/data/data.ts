export interface InfoItem {
  id: number;
  title: string;
  date: string;
}

export interface ProductItem {
  id: number;
  image: string;
  title: string;
  amount: number;
  colors: string[];
}

export const data = {
  tel: '0312345678',
  email: 'onlysweater@jp.com',
  social: {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com/',
  },
  about: [
    '着るだけで心が満たされていくそんなセーターを作るためにセーターだけを販売するOnly Sweaterを立ち上げました。',
    '冬の季節にしか着ないセーターだけれど、少しこだわるだけで今年の冬を特別なものにしてもらえるように細部までこだわって作りました。',
    'あなたの冬が特別なものになりますように...',
  ],
  infoItems: [
    {
      id: 1,
      title: '2022ウィンターコレクション発表のお知らせ',
      date: '2022/10/01',
    },
    {
      id: 2,
      title: '2022ウィンターコレクション発表のお知らせ',
      date: '2022/10/01',
    },
    {
      id: 3,
      title: '2022ウィンターコレクション発表のお知らせ',
      date: '2022/10/01',
    },
  ],
  items: [
    {
      id: 1,
      image: '/images/items/image4.png',
      title: 'ゆったりしたセーター',
      amount: 10000,
      colors: ['#FFFFFF', '#D9D9D9', '#B8B8B8', '#F5B05F', '#B5D3F7'],
    },
    {
      id: 2,
      image: '/images/items/image4.png',
      title: 'ゆったりしたセーター',
      amount: 10000,
      colors: ['#FFFFFF', '#D9D9D9', '#B8B8B8', '#F5B05F', '#B5D3F7'],
    },
    {
      id: 3,
      image: '/images/items/image4.png',
      title: 'ゆったりしたセーター',
      amount: 10000,
      colors: ['#FFFFFF', '#D9D9D9', '#B8B8B8', '#F5B05F', '#B5D3F7'],
    },
  ],
};
