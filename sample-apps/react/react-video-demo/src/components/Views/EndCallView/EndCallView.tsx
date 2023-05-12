import { FC } from 'react';
import classnames from 'classnames';

import Button from '../../Button';
import Feedback from '../../Feedback';

import styles from './EndCallView.module.css';

export type Props = {
  className?: string;
};

export const EndCallView: FC<Props> = ({ className }) => {
  const rootClassName = classnames(styles.root, className);
  return (
    <div className={rootClassName}>
      <div className={styles.panel}>
        <img className={styles.image} src="/images/end-call.png" />
        <h1 className={styles.heading}>Stream Video Calling</h1>
        <p className={styles.description}>
          Build in-app audio rooms, video calling and livestreaming experiences
          with all the features and scalability your users demand.
        </p>
        <div className={styles.ctas}>
          <Button color="primary" shape="oval" onClick={() => {}}>
            TALK TO AN EXPERT
          </Button>
          <Button color="primary" shape="oval" onClick={() => {}}>
            SDK Tutorials
          </Button>
        </div>
        <Feedback className={styles.feedback} inMeeting={false} />
      </div>
    </div>
  );
};
