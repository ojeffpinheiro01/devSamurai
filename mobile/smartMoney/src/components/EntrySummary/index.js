import React from 'react';

import { Container } from '../Core/Container'
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({ onPressActionButton }) => {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ]

  return (
    <Container 
      title='Categorias' 
      actionLabelText='Últimos 7 dias' 
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton} >
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </Container>
  );
};

export default EntrySummary;
