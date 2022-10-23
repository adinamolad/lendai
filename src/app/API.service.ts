/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
};

export type CreateHotelInput = {
  id?: string | null;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address_line_1?: ModelStringInput | null;
  address_line_2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  image_link?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Hotel = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelInput = {
  id: string;
  name?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  city?: string | null;
  zipcode?: string | null;
  country?: string | null;
  image_link?: string | null;
};

export type DeleteHotelInput = {
  id: string;
};

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address_line_1?: ModelStringInput | null;
  address_line_2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  country?: ModelStringInput | null;
  image_link?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionHotelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  address_line_1?: ModelSubscriptionStringInput | null;
  address_line_2?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  zipcode?: ModelSubscriptionStringInput | null;
  country?: ModelSubscriptionStringInput | null;
  image_link?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHotelFilterInput | null> | null;
  or?: Array<ModelSubscriptionHotelFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type ListHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    zipcode: string;
    country: string;
    image_link: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  zipcode: string;
  country: string;
  image_link: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHotel(
    input: CreateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<CreateHotelMutation> {
    const statement = `mutation CreateHotel($input: CreateHotelInput!, $condition: ModelHotelConditionInput) {
        createHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHotelMutation>response.data.createHotel;
  }
  async UpdateHotel(
    input: UpdateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<UpdateHotelMutation> {
    const statement = `mutation UpdateHotel($input: UpdateHotelInput!, $condition: ModelHotelConditionInput) {
        updateHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHotelMutation>response.data.updateHotel;
  }
  async DeleteHotel(
    input: DeleteHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<DeleteHotelMutation> {
    const statement = `mutation DeleteHotel($input: DeleteHotelInput!, $condition: ModelHotelConditionInput) {
        deleteHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHotelMutation>response.data.deleteHotel;
  }
  async GetHotel(id: string): Promise<GetHotelQuery> {
    const statement = `query GetHotel($id: ID!) {
        getHotel(id: $id) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHotelQuery>response.data.getHotel;
  }
  async ListHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHotelsQuery> {
    const statement = `query ListHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String) {
        listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address_line_1
            address_line_2
            city
            zipcode
            country
            image_link
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHotelsQuery>response.data.listHotels;
  }
  OnCreateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  > {
    const statement = `subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onCreateHotel(filter: $filter) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
    >;
  }

  OnUpdateHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  > {
    const statement = `subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
        onUpdateHotel(filter: $filter) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
    >;
  }

  OnDeleteHotelListener(
    filter?: ModelSubscriptionHotelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  > {
    const statement = `subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
        onDeleteHotel(filter: $filter) {
          __typename
          id
          name
          address_line_1
          address_line_2
          city
          zipcode
          country
          image_link
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
    >;
  }
}
