import type Elysia from 'elysia'
import type { Method, MethodType } from './method'

export type ElysiaInstanceType = InstanceType<typeof Elysia>
export const createMethods = <ElysiaInstance extends ElysiaInstanceType, Methods extends readonly Method<MethodType, ElysiaInstance>[]>(...args: Methods) => args

export class Router<ElysiaInstance extends ElysiaInstanceType, Methods extends readonly Method<MethodType, ElysiaInstance>[]>{
  static all = new Map<string, Router<ElysiaInstanceType, readonly Method<MethodType, ElysiaInstanceType>[]>>()
  
  public readonly name: string
  public readonly description: string
  public readonly path: string
  public readonly methods: ReturnType<typeof createMethods<ElysiaInstance, Methods>>

  constructor(options: Router<ElysiaInstance, Methods>) {
    this.name = options.name
    this.description = options.description
    this.path = options.path
    this.methods = options.methods
    Router.all.set(this.path, this as unknown as Router<ElysiaInstanceType, readonly Method<MethodType, ElysiaInstanceType>[]>)
  }
}