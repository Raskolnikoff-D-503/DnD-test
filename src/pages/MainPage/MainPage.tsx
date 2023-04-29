import React, {useCallback, useState} from 'react';
import {ChatGPTWidget, LearningResourcesWidget} from '@/widgets';
import {DragAndDropContainer} from '@/features';

import './MainPage.scss';

type Props = {
  id: string;
  className: string;
};

type ItemType = {
  id: string;
  className: string;
  Component: ({id, className}: Props) => JSX.Element;
};

const ITEMS: ItemType[] = [
  {
    id: '2',
    className: 'main-page__card',
    Component: ChatGPTWidget,
  },
  {
    id: '3',
    className: 'main-page__card',
    Component: LearningResourcesWidget,
  },
  {
    id: '4',
    className: 'main-page__card',
    Component: LearningResourcesWidget,
  },
  {
    id: '5',
    className: 'main-page__card',
    Component: LearningResourcesWidget,
  },
  {
    id: '1',
    className: 'main-page__card main-page__card--full-width',
    Component: LearningResourcesWidget,
  },
  // {
  //   id: '10',
  //   className: 'main-page__card',
  //   Component: CardWithListExample,
  // },
  // {
  //   id: '1',
  //   className: 'main-page__card',
  //   Component: CardWithChartExample,
  // },
  // {
  //   id: '2',
  //   className: 'main-page__card',
  //   Component: CardWithChartExample,
  // },
  // {
  //   id: '3',
  //   className: 'main-page__card main-page__card--full-width',
  //   Component: CardWithListExample,
  // },
];

export const MainPage = () => {
  const [cards, setCards] = useState(ITEMS);

  const updateDataHandler = useCallback((data: ItemType[]) => {
    setCards(data);
  }, []);

  return (
    <div className="main-page">
      <DragAndDropContainer
        data={cards}
        updateDataHandler={updateDataHandler}
        className="main-page__container"
      />
    </div>
  );
};
