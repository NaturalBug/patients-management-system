import { gql } from "@apollo/client";

export const FindPatients = gql`
  query findPatients($id: ID) {
    patients(id: $id) {
      id
      name
      orderId
    }
  }`;