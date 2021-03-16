import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple, Code } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Javascript = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Javascript);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Multiple
        {...scopedProps('fieldNames')}
        label="Fields names"
        description="The fields names"
        component={Input}
        componentExtraProps={{
          label: 'Field name',
          description: 'A field name',
          type: 'text',
        }}
      />
      <Code
        {...scopedProps('fnAggregate')}
        label="Aggregate function"
        description="The javascript aggregate function. e.g: function(current, column1, column2, ...) {
                     <updates partial aggregate (current) based on the current row values>
                     return <updated partial aggregate>"
        lang="javascript"
      />
      <Code
        {...scopedProps('fnCombine')}
        label="Combine function"
        description="The javascript combine function. e.g: function(partialA, partialB) { return <combined partial results>; }"
        lang="javascript"
      />
      <Code
        {...scopedProps('fnReset')}
        label="Reset function"
        description="The javascript reset function. e.g: function() { return <initial value>; }"
        lang="javascript"
      />
    </InlineFieldRow>
  );
};
Javascript.type = 'javascript';
Javascript.fields = ['name', 'fieldNames', 'fnAggregate', 'fnCombine', 'fnReset'];
