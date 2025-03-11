export type TodoType = {
  id: number;
  userId: number;
  title: string;
  desc?: string;
  status: TodoStatusEnum;
};

export enum TodoStatusEnum {
  PENDING = "pending",
  COMPLETE = "complete",
}
