import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sensible Defaults',
    image: '/img/screenshot.png',
    description: <>Build complex queries with robust out-of-the-box features.</>,
  },
  {
    title: 'Extensible',
    image: '/img/date-picker.png',
    description: <>Provide custom components for maximum flexibility.</>,
  },
  {
    title: 'Native TypeScript',
    image: '/img/typescript.png',
    description: <>First-class TypeScript support.</>,
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
