import type { ElysiaInstanceType } from './router'

export enum MethodType {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Delete = 'Delete',
  Websocket = 'Websocket'
}

export type MethodProps<Typed extends MethodType, ElysiaInstance extends ElysiaInstanceType> = {
  type: Typed
  run: (options: Typed extends MethodType.Get
    ? ElysiaInstance['get']
    : Typed extends MethodType.Post
    ? ElysiaInstance['post']
    : Typed extends MethodType.Put
    ? ElysiaInstance['put']
    : Typed extends MethodType.Delete
    ? ElysiaInstance['delete']
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : ElysiaInstance['ws']) => any
}

export class Method<Typed extends MethodType, ElysiaInstance extends ElysiaInstanceType>{
  public readonly type: Typed
  public readonly run

  constructor (options: { type: Typed } & MethodProps<Typed, ElysiaInstance>) {
    this.type = options.type
    this.run = options.run
  }
}