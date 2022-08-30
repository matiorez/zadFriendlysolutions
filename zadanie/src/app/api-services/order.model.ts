export interface OrdersResponse{
  response:OrdersDataResponse;
}

export interface OrdersDataResponse{
  data:Order[]
}

export interface Order{
  work_order_id: number,
  description: string,
  received_date: string,
  assigned_to: AssignedTo[],
  status: string,
  priority: string
}

export interface AssignedTo{
  person_name: string,
  status: string
}
