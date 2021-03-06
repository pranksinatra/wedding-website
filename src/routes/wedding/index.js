import { h } from 'preact';
import Markdown from 'preact-markdown';
import style from './style';
import Header from '../../components/header';
import ImageBox from '../../components/image-box';
import eventContent from '../../content/event.md';
import text from '../../content/text';

const Wedding = () => (
  <div>
    <ImageBox
      aspectRatio={3151 / 1964}
      imageSizes={{ 1920: 'cover-1920w.jpg', 1024: 'cover-1024w.jpg' }}
      content={
        <div class={style.wedding}>
          <Header />
          <main class={style.centered}>
            <h1 class="serif">We're getting married! Test</h1>
            <Markdown markdown={eventContent} />
            <br />
            <br />

            <h3>Photos</h3>
            <figure class="photo">
              <img src="/assets/theater-1120w.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image_theater} />
              </figcaption>
            </figure>

            <figure class="photo">
              <img src="/assets/scarves-1120w.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image_scarves} />
              </figcaption>
            </figure>

            <figure class="photo">
              <img src="/assets/pringles-1120w.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image_pringles} />
              </figcaption>
            </figure>

            <figure class="photo">
              <img src="/assets/backpacking-840w.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image_backpacking} />
              </figcaption>
            </figure>

            <figure class="photo">
              <img src="/assets/sailfish-1120w.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image_sailfish} />
              </figcaption>
            </figure>

            <br />
            <br />
            <p style="text-align: center">~</p>
          </main>
        </div>
      }
    />
  </div>
);

export default Wedding;

{
  /* <figure class="photo">
              <img src="/assets/image3.jpg" alt="" />
              <figcaption>
                <Markdown markdown={text.image3} />
              </figcaption>
            </figure> */
}
