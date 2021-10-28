import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material/';

import { detailItemSchema } from '../../../schemas/employee';

interface employmentDetailsSchema {
  employmentDetails: detailItemSchema[];
}

interface ParamTypes {
  id: string;
}

export const EmploymentDetails: React.FC<employmentDetailsSchema> = ({
  employmentDetails,
}) => {
 
  let { id }: ParamTypes = useParams(); 
  return (
    <Grid container spacing={4}>
      {employmentDetails.map((employmentItem: detailItemSchema) => (
        <Grid item xs={4} key={employmentItem.label}>
          <Card>
            <CardContent>
              <Typography variant="caption" display="block" gutterBottom>
                {employmentItem.label}
              </Typography>
              <Typography variant="body1">{employmentItem.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
