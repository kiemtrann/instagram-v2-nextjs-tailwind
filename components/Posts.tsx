import * as React from 'react'
import Post from './Post'

export interface IPostsProps {}
const posts = [
  {
    id: 1,
    username: '__vankiem__',
    userImg:
      'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/180446478_1170976980019807_6114186342034160607_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=FNiUAa4uNSgAX_AuMbS&tn=vPWFPptzrIdG50Rl&_nc_ht=scontent.fdad1-1.fna&oh=b3fed7b2b83f78cee97e65c752168c39&oe=61B73429',
    img: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/247799073_1297708670679970_5090601680208538144_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=m1f5k7RF3psAX8M_BJU&_nc_ht=scontent.fdad1-1.fna&oh=8076e8b278f25807272a24d6da1cd6d8&oe=61959EF8',
    caption:
      'Có một ngày, bạn sẽ không muốn một tình yêu điên cuồng nữa. Mà muốn một người sẽ không rời xa bạn. [Dịch: Tiêu Dao-逍遥]',
  },
  {
    id: 2,
    username: '__ChuBesDan__',
    userImg:
      'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/247799073_1297708670679970_5090601680208538144_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=m1f5k7RF3psAX8M_BJU&_nc_ht=scontent.fdad1-1.fna&oh=8076e8b278f25807272a24d6da1cd6d8&oe=61959EF8',
    img: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/151208613_1129662197484619_3618520102217948892_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=WtX3sM7ExeEAX9PlYKp&_nc_ht=scontent.fdad1-3.fna&oh=d1d6f12b35b5b65f695c896e89e4f7c6&oe=61B7E124',
    caption: 'Bjo vào c98 đk ko các bác . Hold đến cuối năm',
  },
  {
    id: 3,
    username: '__逍遥__',
    userImg:
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/151208613_1129662197484619_3618520102217948892_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=WtX3sM7ExeEAX9PlYKp&_nc_ht=scontent.fdad1-3.fna&oh=d1d6f12b35b5b65f695c896e89e4f7c6&oe=61B7E124',
    img: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/180446478_1170976980019807_6114186342034160607_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=FNiUAa4uNSgAX_AuMbS&tn=vPWFPptzrIdG50Rl&_nc_ht=scontent.fdad1-1.fna&oh=b3fed7b2b83f78cee97e65c752168c39&oe=61B73429',
    caption:
      'Công việc, deadline, sự nghiệp, trách nhiệm và cả tương lai phía trước làm mình cảm thấy cần thiết hơn là chuyện yêu đương ngay lúc này.',
  },
]
export default function Posts(props: IPostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
