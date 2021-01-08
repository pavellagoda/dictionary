import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import Chart from 'react-google-charts';
import TextField from '@material-ui/core/TextField';

import { useStores } from './hooks/useStore';
const Box = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;
const Results = ({ query }: { query: string }) => {
  const { dictionaryStore } = useStores();
  const startsWith = dictionaryStore.getStarsWith(query).length;
  const endsWith = dictionaryStore.getEndsWith(query).length;
  const appearance = dictionaryStore.getAppearanceNumber(query);
  const repeats = dictionaryStore.getRepeated(query).length;
  const totalNumbers = startsWith + endsWith + appearance + repeats;
  return (
    <>
      <Box>Number of starts with: {startsWith}</Box>
      <Box>Number of ends with: {endsWith}</Box>
      <Box>Number of appearance: {appearance}</Box>
      <Box>Number of words with repeats: {repeats}</Box>
      {!!totalNumbers && (
        <Chart
          chartType="ColumnChart"
          data={[
            ['Statistic', 'Value'],
            ['Number of starts with', startsWith],
            ['Number of ends with', endsWith],
            ['Number of appearance', appearance],
            ['Number of repeats', repeats],
          ]}
        />
      )}
    </>
  );
};

const App = observer(() => {
  const [query, setQuery] = useState('');

  return (
    <Container maxWidth="sm">
      <TextField
        value={query}
        id="standard-basic"
        label="Type your letter..."
        onChange={(event) => {
          const { value } = event.target;
          setQuery(value.charAt(value.length - 1));
        }}
      />
      {query && <Results query={query} />}
    </Container>
  );
});

export default App;
