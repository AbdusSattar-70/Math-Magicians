import React from 'react';

import styles from '../styles/Home.module.css';

function Home() {
  const para1 = (
    <p>
      We are delighted to have you here and share our
      passion for learning and inspiration with you. As you browse our site,
      you will find a variety of resources and tools to help you achieve your
      goals and unlock your potential. Our calculator is designed to make complex math
      problems a breeze, while our randomly generated quotes can spark your creativity and
      motivate you to reach for the stars. At the heart of our website is a
      commitment to accessibility and inclusivity. We believe that everyone
      should have access to the knowledge and resources they need to succeed,
      and we are proud to offer our content and tools to a global audience.
    </p>
  );

  const para2 = (
    <p>
      We are also committed to building a supportive and engaged community,
      and we welcome your feedback and ideas. Whether you&apos;re a student,
      professional, or lifelong learner, we hope you&apos;ll find something here that
      inspires and empowers you.Thank you for visiting our website, and we look forward
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem, maxime nemo
      doloremque nihil assumenda labore omnis nisi, fugiat autem libero quae ullam veritatis
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem, maxime nemo
      doloremque nihil assumenda labore omnis nisi, fugiat autem libero quae ullam veritatis
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem, maxime nemo
      doloremque nihil assumenda labore omnis nisi, fugiat autem libero quae
      ullam veritatis blanditiis.Consequuntur nostrum natus numquam sunt. blanditiis.
      Consequuntur nostrum natus numquam sunt. blanditiis. Consequuntur nostrum natus
      numquam sunt.to connecting with you as we continue to grow and evolve.
    </p>
  );
  return (
    <div className={styles.container}>
      <h2>Welcome To Our Page! </h2>
      {para1}
      <br />
      {para2}
    </div>
  );
}

export default Home;
