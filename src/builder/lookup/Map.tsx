import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Checkbox, Map as MapField } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Map = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Map);
  return (
    <>
      <InlineFieldRow>
        <MapField {...scopedProps('map')} label="Map" description="The lookups map" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('isOneToOne')}
          label="Is one to one?"
          description="Specifies if the map is a one to one"
        />
      </InlineFieldRow>
    </>
  );
};
Map.type = 'map';
Map.fields = ['map', 'isOneToOne'];
