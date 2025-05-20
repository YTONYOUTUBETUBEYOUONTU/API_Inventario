
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Activo
 * 
 */
export type Activo = $Result.DefaultSelection<Prisma.$ActivoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model TipoActivo
 * 
 */
export type TipoActivo = $Result.DefaultSelection<Prisma.$TipoActivoPayload>
/**
 * Model Localizacion
 * 
 */
export type Localizacion = $Result.DefaultSelection<Prisma.$LocalizacionPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activos
 * const activos = await prisma.activo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Activos
   * const activos = await prisma.activo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activo`: Exposes CRUD operations for the **Activo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activos
    * const activos = await prisma.activo.findMany()
    * ```
    */
  get activo(): Prisma.ActivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoActivo`: Exposes CRUD operations for the **TipoActivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoActivos
    * const tipoActivos = await prisma.tipoActivo.findMany()
    * ```
    */
  get tipoActivo(): Prisma.TipoActivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacion`: Exposes CRUD operations for the **Localizacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacions
    * const localizacions = await prisma.localizacion.findMany()
    * ```
    */
  get localizacion(): Prisma.LocalizacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Activo: 'Activo',
    Usuario: 'Usuario',
    TipoActivo: 'TipoActivo',
    Localizacion: 'Localizacion',
    Categoria: 'Categoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "activo" | "usuario" | "tipoActivo" | "localizacion" | "categoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Activo: {
        payload: Prisma.$ActivoPayload<ExtArgs>
        fields: Prisma.ActivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          findFirst: {
            args: Prisma.ActivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          findMany: {
            args: Prisma.ActivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>[]
          }
          create: {
            args: Prisma.ActivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          createMany: {
            args: Prisma.ActivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>[]
          }
          delete: {
            args: Prisma.ActivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          update: {
            args: Prisma.ActivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          deleteMany: {
            args: Prisma.ActivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>[]
          }
          upsert: {
            args: Prisma.ActivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivoPayload>
          }
          aggregate: {
            args: Prisma.ActivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivo>
          }
          groupBy: {
            args: Prisma.ActivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivoCountArgs<ExtArgs>
            result: $Utils.Optional<ActivoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      TipoActivo: {
        payload: Prisma.$TipoActivoPayload<ExtArgs>
        fields: Prisma.TipoActivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoActivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoActivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          findFirst: {
            args: Prisma.TipoActivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoActivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          findMany: {
            args: Prisma.TipoActivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>[]
          }
          create: {
            args: Prisma.TipoActivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          createMany: {
            args: Prisma.TipoActivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoActivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>[]
          }
          delete: {
            args: Prisma.TipoActivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          update: {
            args: Prisma.TipoActivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          deleteMany: {
            args: Prisma.TipoActivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoActivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoActivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>[]
          }
          upsert: {
            args: Prisma.TipoActivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoActivoPayload>
          }
          aggregate: {
            args: Prisma.TipoActivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoActivo>
          }
          groupBy: {
            args: Prisma.TipoActivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoActivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoActivoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoActivoCountAggregateOutputType> | number
          }
        }
      }
      Localizacion: {
        payload: Prisma.$LocalizacionPayload<ExtArgs>
        fields: Prisma.LocalizacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          findFirst: {
            args: Prisma.LocalizacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          findMany: {
            args: Prisma.LocalizacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>[]
          }
          create: {
            args: Prisma.LocalizacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          createMany: {
            args: Prisma.LocalizacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalizacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>[]
          }
          delete: {
            args: Prisma.LocalizacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          update: {
            args: Prisma.LocalizacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalizacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>[]
          }
          upsert: {
            args: Prisma.LocalizacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacionPayload>
          }
          aggregate: {
            args: Prisma.LocalizacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacion>
          }
          groupBy: {
            args: Prisma.LocalizacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacionCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacionCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    activo?: ActivoOmit
    usuario?: UsuarioOmit
    tipoActivo?: TipoActivoOmit
    localizacion?: LocalizacionOmit
    categoria?: CategoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    activos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | UsuarioCountOutputTypeCountActivosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountActivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivoWhereInput
  }


  /**
   * Count Type TipoActivoCountOutputType
   */

  export type TipoActivoCountOutputType = {
    activos: number
  }

  export type TipoActivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | TipoActivoCountOutputTypeCountActivosArgs
  }

  // Custom InputTypes
  /**
   * TipoActivoCountOutputType without action
   */
  export type TipoActivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivoCountOutputType
     */
    select?: TipoActivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoActivoCountOutputType without action
   */
  export type TipoActivoCountOutputTypeCountActivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivoWhereInput
  }


  /**
   * Count Type LocalizacionCountOutputType
   */

  export type LocalizacionCountOutputType = {
    activos: number
  }

  export type LocalizacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | LocalizacionCountOutputTypeCountActivosArgs
  }

  // Custom InputTypes
  /**
   * LocalizacionCountOutputType without action
   */
  export type LocalizacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacionCountOutputType
     */
    select?: LocalizacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalizacionCountOutputType without action
   */
  export type LocalizacionCountOutputTypeCountActivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    activos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | CategoriaCountOutputTypeCountActivosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountActivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Activo
   */

  export type AggregateActivo = {
    _count: ActivoCountAggregateOutputType | null
    _avg: ActivoAvgAggregateOutputType | null
    _sum: ActivoSumAggregateOutputType | null
    _min: ActivoMinAggregateOutputType | null
    _max: ActivoMaxAggregateOutputType | null
  }

  export type ActivoAvgAggregateOutputType = {
    id: number | null
    numeroEquipo: number | null
    localizacionId: number | null
    tipoActivoId: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type ActivoSumAggregateOutputType = {
    id: number | null
    numeroEquipo: number | null
    localizacionId: number | null
    tipoActivoId: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type ActivoMinAggregateOutputType = {
    id: number | null
    numeroSerie: string | null
    numeroEquipo: number | null
    descripcion: string | null
    status: string | null
    fechaRegistro: Date | null
    localizacionId: number | null
    tipoActivoId: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type ActivoMaxAggregateOutputType = {
    id: number | null
    numeroSerie: string | null
    numeroEquipo: number | null
    descripcion: string | null
    status: string | null
    fechaRegistro: Date | null
    localizacionId: number | null
    tipoActivoId: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type ActivoCountAggregateOutputType = {
    id: number
    numeroSerie: number
    numeroEquipo: number
    descripcion: number
    status: number
    fechaRegistro: number
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
    _all: number
  }


  export type ActivoAvgAggregateInputType = {
    id?: true
    numeroEquipo?: true
    localizacionId?: true
    tipoActivoId?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type ActivoSumAggregateInputType = {
    id?: true
    numeroEquipo?: true
    localizacionId?: true
    tipoActivoId?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type ActivoMinAggregateInputType = {
    id?: true
    numeroSerie?: true
    numeroEquipo?: true
    descripcion?: true
    status?: true
    fechaRegistro?: true
    localizacionId?: true
    tipoActivoId?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type ActivoMaxAggregateInputType = {
    id?: true
    numeroSerie?: true
    numeroEquipo?: true
    descripcion?: true
    status?: true
    fechaRegistro?: true
    localizacionId?: true
    tipoActivoId?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type ActivoCountAggregateInputType = {
    id?: true
    numeroSerie?: true
    numeroEquipo?: true
    descripcion?: true
    status?: true
    fechaRegistro?: true
    localizacionId?: true
    tipoActivoId?: true
    usuarioId?: true
    categoriaId?: true
    _all?: true
  }

  export type ActivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activo to aggregate.
     */
    where?: ActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activos to fetch.
     */
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activos
    **/
    _count?: true | ActivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivoMaxAggregateInputType
  }

  export type GetActivoAggregateType<T extends ActivoAggregateArgs> = {
        [P in keyof T & keyof AggregateActivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivo[P]>
      : GetScalarType<T[P], AggregateActivo[P]>
  }




  export type ActivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivoWhereInput
    orderBy?: ActivoOrderByWithAggregationInput | ActivoOrderByWithAggregationInput[]
    by: ActivoScalarFieldEnum[] | ActivoScalarFieldEnum
    having?: ActivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivoCountAggregateInputType | true
    _avg?: ActivoAvgAggregateInputType
    _sum?: ActivoSumAggregateInputType
    _min?: ActivoMinAggregateInputType
    _max?: ActivoMaxAggregateInputType
  }

  export type ActivoGroupByOutputType = {
    id: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro: Date
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
    _count: ActivoCountAggregateOutputType | null
    _avg: ActivoAvgAggregateOutputType | null
    _sum: ActivoSumAggregateOutputType | null
    _min: ActivoMinAggregateOutputType | null
    _max: ActivoMaxAggregateOutputType | null
  }

  type GetActivoGroupByPayload<T extends ActivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivoGroupByOutputType[P]>
            : GetScalarType<T[P], ActivoGroupByOutputType[P]>
        }
      >
    >


  export type ActivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSerie?: boolean
    numeroEquipo?: boolean
    descripcion?: boolean
    status?: boolean
    fechaRegistro?: boolean
    localizacionId?: boolean
    tipoActivoId?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activo"]>

  export type ActivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSerie?: boolean
    numeroEquipo?: boolean
    descripcion?: boolean
    status?: boolean
    fechaRegistro?: boolean
    localizacionId?: boolean
    tipoActivoId?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activo"]>

  export type ActivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroSerie?: boolean
    numeroEquipo?: boolean
    descripcion?: boolean
    status?: boolean
    fechaRegistro?: boolean
    localizacionId?: boolean
    tipoActivoId?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activo"]>

  export type ActivoSelectScalar = {
    id?: boolean
    numeroSerie?: boolean
    numeroEquipo?: boolean
    descripcion?: boolean
    status?: boolean
    fechaRegistro?: boolean
    localizacionId?: boolean
    tipoActivoId?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
  }

  export type ActivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroSerie" | "numeroEquipo" | "descripcion" | "status" | "fechaRegistro" | "localizacionId" | "tipoActivoId" | "usuarioId" | "categoriaId", ExtArgs["result"]["activo"]>
  export type ActivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ActivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ActivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacion?: boolean | LocalizacionDefaultArgs<ExtArgs>
    tipoActivo?: boolean | TipoActivoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ActivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activo"
    objects: {
      localizacion: Prisma.$LocalizacionPayload<ExtArgs>
      tipoActivo: Prisma.$TipoActivoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroSerie: string
      numeroEquipo: number
      descripcion: string
      status: string
      fechaRegistro: Date
      localizacionId: number
      tipoActivoId: number
      usuarioId: number
      categoriaId: number
    }, ExtArgs["result"]["activo"]>
    composites: {}
  }

  type ActivoGetPayload<S extends boolean | null | undefined | ActivoDefaultArgs> = $Result.GetResult<Prisma.$ActivoPayload, S>

  type ActivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivoCountAggregateInputType | true
    }

  export interface ActivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activo'], meta: { name: 'Activo' } }
    /**
     * Find zero or one Activo that matches the filter.
     * @param {ActivoFindUniqueArgs} args - Arguments to find a Activo
     * @example
     * // Get one Activo
     * const activo = await prisma.activo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivoFindUniqueArgs>(args: SelectSubset<T, ActivoFindUniqueArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivoFindUniqueOrThrowArgs} args - Arguments to find a Activo
     * @example
     * // Get one Activo
     * const activo = await prisma.activo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoFindFirstArgs} args - Arguments to find a Activo
     * @example
     * // Get one Activo
     * const activo = await prisma.activo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivoFindFirstArgs>(args?: SelectSubset<T, ActivoFindFirstArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoFindFirstOrThrowArgs} args - Arguments to find a Activo
     * @example
     * // Get one Activo
     * const activo = await prisma.activo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activos
     * const activos = await prisma.activo.findMany()
     * 
     * // Get first 10 Activos
     * const activos = await prisma.activo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activoWithIdOnly = await prisma.activo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivoFindManyArgs>(args?: SelectSubset<T, ActivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activo.
     * @param {ActivoCreateArgs} args - Arguments to create a Activo.
     * @example
     * // Create one Activo
     * const Activo = await prisma.activo.create({
     *   data: {
     *     // ... data to create a Activo
     *   }
     * })
     * 
     */
    create<T extends ActivoCreateArgs>(args: SelectSubset<T, ActivoCreateArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activos.
     * @param {ActivoCreateManyArgs} args - Arguments to create many Activos.
     * @example
     * // Create many Activos
     * const activo = await prisma.activo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivoCreateManyArgs>(args?: SelectSubset<T, ActivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activos and returns the data saved in the database.
     * @param {ActivoCreateManyAndReturnArgs} args - Arguments to create many Activos.
     * @example
     * // Create many Activos
     * const activo = await prisma.activo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activos and only return the `id`
     * const activoWithIdOnly = await prisma.activo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivoCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activo.
     * @param {ActivoDeleteArgs} args - Arguments to delete one Activo.
     * @example
     * // Delete one Activo
     * const Activo = await prisma.activo.delete({
     *   where: {
     *     // ... filter to delete one Activo
     *   }
     * })
     * 
     */
    delete<T extends ActivoDeleteArgs>(args: SelectSubset<T, ActivoDeleteArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activo.
     * @param {ActivoUpdateArgs} args - Arguments to update one Activo.
     * @example
     * // Update one Activo
     * const activo = await prisma.activo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivoUpdateArgs>(args: SelectSubset<T, ActivoUpdateArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activos.
     * @param {ActivoDeleteManyArgs} args - Arguments to filter Activos to delete.
     * @example
     * // Delete a few Activos
     * const { count } = await prisma.activo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivoDeleteManyArgs>(args?: SelectSubset<T, ActivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activos
     * const activo = await prisma.activo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivoUpdateManyArgs>(args: SelectSubset<T, ActivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activos and returns the data updated in the database.
     * @param {ActivoUpdateManyAndReturnArgs} args - Arguments to update many Activos.
     * @example
     * // Update many Activos
     * const activo = await prisma.activo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activos and only return the `id`
     * const activoWithIdOnly = await prisma.activo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivoUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activo.
     * @param {ActivoUpsertArgs} args - Arguments to update or create a Activo.
     * @example
     * // Update or create a Activo
     * const activo = await prisma.activo.upsert({
     *   create: {
     *     // ... data to create a Activo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activo we want to update
     *   }
     * })
     */
    upsert<T extends ActivoUpsertArgs>(args: SelectSubset<T, ActivoUpsertArgs<ExtArgs>>): Prisma__ActivoClient<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoCountArgs} args - Arguments to filter Activos to count.
     * @example
     * // Count the number of Activos
     * const count = await prisma.activo.count({
     *   where: {
     *     // ... the filter for the Activos we want to count
     *   }
     * })
    **/
    count<T extends ActivoCountArgs>(
      args?: Subset<T, ActivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivoAggregateArgs>(args: Subset<T, ActivoAggregateArgs>): Prisma.PrismaPromise<GetActivoAggregateType<T>>

    /**
     * Group by Activo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivoGroupByArgs['orderBy'] }
        : { orderBy?: ActivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activo model
   */
  readonly fields: ActivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localizacion<T extends LocalizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalizacionDefaultArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoActivo<T extends TipoActivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoActivoDefaultArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activo model
   */
  interface ActivoFieldRefs {
    readonly id: FieldRef<"Activo", 'Int'>
    readonly numeroSerie: FieldRef<"Activo", 'String'>
    readonly numeroEquipo: FieldRef<"Activo", 'Int'>
    readonly descripcion: FieldRef<"Activo", 'String'>
    readonly status: FieldRef<"Activo", 'String'>
    readonly fechaRegistro: FieldRef<"Activo", 'DateTime'>
    readonly localizacionId: FieldRef<"Activo", 'Int'>
    readonly tipoActivoId: FieldRef<"Activo", 'Int'>
    readonly usuarioId: FieldRef<"Activo", 'Int'>
    readonly categoriaId: FieldRef<"Activo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activo findUnique
   */
  export type ActivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter, which Activo to fetch.
     */
    where: ActivoWhereUniqueInput
  }

  /**
   * Activo findUniqueOrThrow
   */
  export type ActivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter, which Activo to fetch.
     */
    where: ActivoWhereUniqueInput
  }

  /**
   * Activo findFirst
   */
  export type ActivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter, which Activo to fetch.
     */
    where?: ActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activos to fetch.
     */
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activos.
     */
    cursor?: ActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activos.
     */
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Activo findFirstOrThrow
   */
  export type ActivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter, which Activo to fetch.
     */
    where?: ActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activos to fetch.
     */
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activos.
     */
    cursor?: ActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activos.
     */
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Activo findMany
   */
  export type ActivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter, which Activos to fetch.
     */
    where?: ActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activos to fetch.
     */
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activos.
     */
    cursor?: ActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activos.
     */
    skip?: number
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Activo create
   */
  export type ActivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Activo.
     */
    data: XOR<ActivoCreateInput, ActivoUncheckedCreateInput>
  }

  /**
   * Activo createMany
   */
  export type ActivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activos.
     */
    data: ActivoCreateManyInput | ActivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activo createManyAndReturn
   */
  export type ActivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * The data used to create many Activos.
     */
    data: ActivoCreateManyInput | ActivoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activo update
   */
  export type ActivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Activo.
     */
    data: XOR<ActivoUpdateInput, ActivoUncheckedUpdateInput>
    /**
     * Choose, which Activo to update.
     */
    where: ActivoWhereUniqueInput
  }

  /**
   * Activo updateMany
   */
  export type ActivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activos.
     */
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyInput>
    /**
     * Filter which Activos to update
     */
    where?: ActivoWhereInput
    /**
     * Limit how many Activos to update.
     */
    limit?: number
  }

  /**
   * Activo updateManyAndReturn
   */
  export type ActivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * The data used to update Activos.
     */
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyInput>
    /**
     * Filter which Activos to update
     */
    where?: ActivoWhereInput
    /**
     * Limit how many Activos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activo upsert
   */
  export type ActivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Activo to update in case it exists.
     */
    where: ActivoWhereUniqueInput
    /**
     * In case the Activo found by the `where` argument doesn't exist, create a new Activo with this data.
     */
    create: XOR<ActivoCreateInput, ActivoUncheckedCreateInput>
    /**
     * In case the Activo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivoUpdateInput, ActivoUncheckedUpdateInput>
  }

  /**
   * Activo delete
   */
  export type ActivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    /**
     * Filter which Activo to delete.
     */
    where: ActivoWhereUniqueInput
  }

  /**
   * Activo deleteMany
   */
  export type ActivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activos to delete
     */
    where?: ActivoWhereInput
    /**
     * Limit how many Activos to delete.
     */
    limit?: number
  }

  /**
   * Activo without action
   */
  export type ActivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    activos?: boolean | Usuario$activosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | Usuario$activosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      activos: Prisma.$ActivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activos<T extends Usuario$activosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$activosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.activos
   */
  export type Usuario$activosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    where?: ActivoWhereInput
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    cursor?: ActivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model TipoActivo
   */

  export type AggregateTipoActivo = {
    _count: TipoActivoCountAggregateOutputType | null
    _avg: TipoActivoAvgAggregateOutputType | null
    _sum: TipoActivoSumAggregateOutputType | null
    _min: TipoActivoMinAggregateOutputType | null
    _max: TipoActivoMaxAggregateOutputType | null
  }

  export type TipoActivoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoActivoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoActivoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type TipoActivoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type TipoActivoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type TipoActivoAvgAggregateInputType = {
    id?: true
  }

  export type TipoActivoSumAggregateInputType = {
    id?: true
  }

  export type TipoActivoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoActivoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type TipoActivoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type TipoActivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoActivo to aggregate.
     */
    where?: TipoActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoActivos to fetch.
     */
    orderBy?: TipoActivoOrderByWithRelationInput | TipoActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoActivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoActivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoActivos
    **/
    _count?: true | TipoActivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoActivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoActivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoActivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoActivoMaxAggregateInputType
  }

  export type GetTipoActivoAggregateType<T extends TipoActivoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoActivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoActivo[P]>
      : GetScalarType<T[P], AggregateTipoActivo[P]>
  }




  export type TipoActivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoActivoWhereInput
    orderBy?: TipoActivoOrderByWithAggregationInput | TipoActivoOrderByWithAggregationInput[]
    by: TipoActivoScalarFieldEnum[] | TipoActivoScalarFieldEnum
    having?: TipoActivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoActivoCountAggregateInputType | true
    _avg?: TipoActivoAvgAggregateInputType
    _sum?: TipoActivoSumAggregateInputType
    _min?: TipoActivoMinAggregateInputType
    _max?: TipoActivoMaxAggregateInputType
  }

  export type TipoActivoGroupByOutputType = {
    id: number
    nombre: string
    _count: TipoActivoCountAggregateOutputType | null
    _avg: TipoActivoAvgAggregateOutputType | null
    _sum: TipoActivoSumAggregateOutputType | null
    _min: TipoActivoMinAggregateOutputType | null
    _max: TipoActivoMaxAggregateOutputType | null
  }

  type GetTipoActivoGroupByPayload<T extends TipoActivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoActivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoActivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoActivoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoActivoGroupByOutputType[P]>
        }
      >
    >


  export type TipoActivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    activos?: boolean | TipoActivo$activosArgs<ExtArgs>
    _count?: boolean | TipoActivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoActivo"]>

  export type TipoActivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipoActivo"]>

  export type TipoActivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["tipoActivo"]>

  export type TipoActivoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type TipoActivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["tipoActivo"]>
  export type TipoActivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | TipoActivo$activosArgs<ExtArgs>
    _count?: boolean | TipoActivoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoActivoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoActivoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoActivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoActivo"
    objects: {
      activos: Prisma.$ActivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["tipoActivo"]>
    composites: {}
  }

  type TipoActivoGetPayload<S extends boolean | null | undefined | TipoActivoDefaultArgs> = $Result.GetResult<Prisma.$TipoActivoPayload, S>

  type TipoActivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoActivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoActivoCountAggregateInputType | true
    }

  export interface TipoActivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoActivo'], meta: { name: 'TipoActivo' } }
    /**
     * Find zero or one TipoActivo that matches the filter.
     * @param {TipoActivoFindUniqueArgs} args - Arguments to find a TipoActivo
     * @example
     * // Get one TipoActivo
     * const tipoActivo = await prisma.tipoActivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoActivoFindUniqueArgs>(args: SelectSubset<T, TipoActivoFindUniqueArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoActivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoActivoFindUniqueOrThrowArgs} args - Arguments to find a TipoActivo
     * @example
     * // Get one TipoActivo
     * const tipoActivo = await prisma.tipoActivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoActivoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoActivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoActivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoFindFirstArgs} args - Arguments to find a TipoActivo
     * @example
     * // Get one TipoActivo
     * const tipoActivo = await prisma.tipoActivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoActivoFindFirstArgs>(args?: SelectSubset<T, TipoActivoFindFirstArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoActivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoFindFirstOrThrowArgs} args - Arguments to find a TipoActivo
     * @example
     * // Get one TipoActivo
     * const tipoActivo = await prisma.tipoActivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoActivoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoActivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoActivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoActivos
     * const tipoActivos = await prisma.tipoActivo.findMany()
     * 
     * // Get first 10 TipoActivos
     * const tipoActivos = await prisma.tipoActivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoActivoWithIdOnly = await prisma.tipoActivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoActivoFindManyArgs>(args?: SelectSubset<T, TipoActivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoActivo.
     * @param {TipoActivoCreateArgs} args - Arguments to create a TipoActivo.
     * @example
     * // Create one TipoActivo
     * const TipoActivo = await prisma.tipoActivo.create({
     *   data: {
     *     // ... data to create a TipoActivo
     *   }
     * })
     * 
     */
    create<T extends TipoActivoCreateArgs>(args: SelectSubset<T, TipoActivoCreateArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoActivos.
     * @param {TipoActivoCreateManyArgs} args - Arguments to create many TipoActivos.
     * @example
     * // Create many TipoActivos
     * const tipoActivo = await prisma.tipoActivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoActivoCreateManyArgs>(args?: SelectSubset<T, TipoActivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoActivos and returns the data saved in the database.
     * @param {TipoActivoCreateManyAndReturnArgs} args - Arguments to create many TipoActivos.
     * @example
     * // Create many TipoActivos
     * const tipoActivo = await prisma.tipoActivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoActivos and only return the `id`
     * const tipoActivoWithIdOnly = await prisma.tipoActivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoActivoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoActivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoActivo.
     * @param {TipoActivoDeleteArgs} args - Arguments to delete one TipoActivo.
     * @example
     * // Delete one TipoActivo
     * const TipoActivo = await prisma.tipoActivo.delete({
     *   where: {
     *     // ... filter to delete one TipoActivo
     *   }
     * })
     * 
     */
    delete<T extends TipoActivoDeleteArgs>(args: SelectSubset<T, TipoActivoDeleteArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoActivo.
     * @param {TipoActivoUpdateArgs} args - Arguments to update one TipoActivo.
     * @example
     * // Update one TipoActivo
     * const tipoActivo = await prisma.tipoActivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoActivoUpdateArgs>(args: SelectSubset<T, TipoActivoUpdateArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoActivos.
     * @param {TipoActivoDeleteManyArgs} args - Arguments to filter TipoActivos to delete.
     * @example
     * // Delete a few TipoActivos
     * const { count } = await prisma.tipoActivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoActivoDeleteManyArgs>(args?: SelectSubset<T, TipoActivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoActivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoActivos
     * const tipoActivo = await prisma.tipoActivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoActivoUpdateManyArgs>(args: SelectSubset<T, TipoActivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoActivos and returns the data updated in the database.
     * @param {TipoActivoUpdateManyAndReturnArgs} args - Arguments to update many TipoActivos.
     * @example
     * // Update many TipoActivos
     * const tipoActivo = await prisma.tipoActivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoActivos and only return the `id`
     * const tipoActivoWithIdOnly = await prisma.tipoActivo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoActivoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoActivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoActivo.
     * @param {TipoActivoUpsertArgs} args - Arguments to update or create a TipoActivo.
     * @example
     * // Update or create a TipoActivo
     * const tipoActivo = await prisma.tipoActivo.upsert({
     *   create: {
     *     // ... data to create a TipoActivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoActivo we want to update
     *   }
     * })
     */
    upsert<T extends TipoActivoUpsertArgs>(args: SelectSubset<T, TipoActivoUpsertArgs<ExtArgs>>): Prisma__TipoActivoClient<$Result.GetResult<Prisma.$TipoActivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoActivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoCountArgs} args - Arguments to filter TipoActivos to count.
     * @example
     * // Count the number of TipoActivos
     * const count = await prisma.tipoActivo.count({
     *   where: {
     *     // ... the filter for the TipoActivos we want to count
     *   }
     * })
    **/
    count<T extends TipoActivoCountArgs>(
      args?: Subset<T, TipoActivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoActivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoActivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoActivoAggregateArgs>(args: Subset<T, TipoActivoAggregateArgs>): Prisma.PrismaPromise<GetTipoActivoAggregateType<T>>

    /**
     * Group by TipoActivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoActivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoActivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoActivoGroupByArgs['orderBy'] }
        : { orderBy?: TipoActivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoActivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoActivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoActivo model
   */
  readonly fields: TipoActivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoActivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoActivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activos<T extends TipoActivo$activosArgs<ExtArgs> = {}>(args?: Subset<T, TipoActivo$activosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoActivo model
   */
  interface TipoActivoFieldRefs {
    readonly id: FieldRef<"TipoActivo", 'Int'>
    readonly nombre: FieldRef<"TipoActivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoActivo findUnique
   */
  export type TipoActivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter, which TipoActivo to fetch.
     */
    where: TipoActivoWhereUniqueInput
  }

  /**
   * TipoActivo findUniqueOrThrow
   */
  export type TipoActivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter, which TipoActivo to fetch.
     */
    where: TipoActivoWhereUniqueInput
  }

  /**
   * TipoActivo findFirst
   */
  export type TipoActivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter, which TipoActivo to fetch.
     */
    where?: TipoActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoActivos to fetch.
     */
    orderBy?: TipoActivoOrderByWithRelationInput | TipoActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoActivos.
     */
    cursor?: TipoActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoActivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoActivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoActivos.
     */
    distinct?: TipoActivoScalarFieldEnum | TipoActivoScalarFieldEnum[]
  }

  /**
   * TipoActivo findFirstOrThrow
   */
  export type TipoActivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter, which TipoActivo to fetch.
     */
    where?: TipoActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoActivos to fetch.
     */
    orderBy?: TipoActivoOrderByWithRelationInput | TipoActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoActivos.
     */
    cursor?: TipoActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoActivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoActivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoActivos.
     */
    distinct?: TipoActivoScalarFieldEnum | TipoActivoScalarFieldEnum[]
  }

  /**
   * TipoActivo findMany
   */
  export type TipoActivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter, which TipoActivos to fetch.
     */
    where?: TipoActivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoActivos to fetch.
     */
    orderBy?: TipoActivoOrderByWithRelationInput | TipoActivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoActivos.
     */
    cursor?: TipoActivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoActivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoActivos.
     */
    skip?: number
    distinct?: TipoActivoScalarFieldEnum | TipoActivoScalarFieldEnum[]
  }

  /**
   * TipoActivo create
   */
  export type TipoActivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoActivo.
     */
    data: XOR<TipoActivoCreateInput, TipoActivoUncheckedCreateInput>
  }

  /**
   * TipoActivo createMany
   */
  export type TipoActivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoActivos.
     */
    data: TipoActivoCreateManyInput | TipoActivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoActivo createManyAndReturn
   */
  export type TipoActivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoActivos.
     */
    data: TipoActivoCreateManyInput | TipoActivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoActivo update
   */
  export type TipoActivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoActivo.
     */
    data: XOR<TipoActivoUpdateInput, TipoActivoUncheckedUpdateInput>
    /**
     * Choose, which TipoActivo to update.
     */
    where: TipoActivoWhereUniqueInput
  }

  /**
   * TipoActivo updateMany
   */
  export type TipoActivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoActivos.
     */
    data: XOR<TipoActivoUpdateManyMutationInput, TipoActivoUncheckedUpdateManyInput>
    /**
     * Filter which TipoActivos to update
     */
    where?: TipoActivoWhereInput
    /**
     * Limit how many TipoActivos to update.
     */
    limit?: number
  }

  /**
   * TipoActivo updateManyAndReturn
   */
  export type TipoActivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * The data used to update TipoActivos.
     */
    data: XOR<TipoActivoUpdateManyMutationInput, TipoActivoUncheckedUpdateManyInput>
    /**
     * Filter which TipoActivos to update
     */
    where?: TipoActivoWhereInput
    /**
     * Limit how many TipoActivos to update.
     */
    limit?: number
  }

  /**
   * TipoActivo upsert
   */
  export type TipoActivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoActivo to update in case it exists.
     */
    where: TipoActivoWhereUniqueInput
    /**
     * In case the TipoActivo found by the `where` argument doesn't exist, create a new TipoActivo with this data.
     */
    create: XOR<TipoActivoCreateInput, TipoActivoUncheckedCreateInput>
    /**
     * In case the TipoActivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoActivoUpdateInput, TipoActivoUncheckedUpdateInput>
  }

  /**
   * TipoActivo delete
   */
  export type TipoActivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
    /**
     * Filter which TipoActivo to delete.
     */
    where: TipoActivoWhereUniqueInput
  }

  /**
   * TipoActivo deleteMany
   */
  export type TipoActivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoActivos to delete
     */
    where?: TipoActivoWhereInput
    /**
     * Limit how many TipoActivos to delete.
     */
    limit?: number
  }

  /**
   * TipoActivo.activos
   */
  export type TipoActivo$activosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    where?: ActivoWhereInput
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    cursor?: ActivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * TipoActivo without action
   */
  export type TipoActivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoActivo
     */
    select?: TipoActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoActivo
     */
    omit?: TipoActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoActivoInclude<ExtArgs> | null
  }


  /**
   * Model Localizacion
   */

  export type AggregateLocalizacion = {
    _count: LocalizacionCountAggregateOutputType | null
    _avg: LocalizacionAvgAggregateOutputType | null
    _sum: LocalizacionSumAggregateOutputType | null
    _min: LocalizacionMinAggregateOutputType | null
    _max: LocalizacionMaxAggregateOutputType | null
  }

  export type LocalizacionAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalizacionSumAggregateOutputType = {
    id: number | null
  }

  export type LocalizacionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type LocalizacionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type LocalizacionCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type LocalizacionAvgAggregateInputType = {
    id?: true
  }

  export type LocalizacionSumAggregateInputType = {
    id?: true
  }

  export type LocalizacionMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type LocalizacionMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type LocalizacionCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type LocalizacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacion to aggregate.
     */
    where?: LocalizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacions to fetch.
     */
    orderBy?: LocalizacionOrderByWithRelationInput | LocalizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacions
    **/
    _count?: true | LocalizacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacionMaxAggregateInputType
  }

  export type GetLocalizacionAggregateType<T extends LocalizacionAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacion[P]>
      : GetScalarType<T[P], AggregateLocalizacion[P]>
  }




  export type LocalizacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacionWhereInput
    orderBy?: LocalizacionOrderByWithAggregationInput | LocalizacionOrderByWithAggregationInput[]
    by: LocalizacionScalarFieldEnum[] | LocalizacionScalarFieldEnum
    having?: LocalizacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacionCountAggregateInputType | true
    _avg?: LocalizacionAvgAggregateInputType
    _sum?: LocalizacionSumAggregateInputType
    _min?: LocalizacionMinAggregateInputType
    _max?: LocalizacionMaxAggregateInputType
  }

  export type LocalizacionGroupByOutputType = {
    id: number
    nombre: string
    _count: LocalizacionCountAggregateOutputType | null
    _avg: LocalizacionAvgAggregateOutputType | null
    _sum: LocalizacionSumAggregateOutputType | null
    _min: LocalizacionMinAggregateOutputType | null
    _max: LocalizacionMaxAggregateOutputType | null
  }

  type GetLocalizacionGroupByPayload<T extends LocalizacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacionGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacionGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    activos?: boolean | Localizacion$activosArgs<ExtArgs>
    _count?: boolean | LocalizacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacion"]>

  export type LocalizacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["localizacion"]>

  export type LocalizacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["localizacion"]>

  export type LocalizacionSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type LocalizacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["localizacion"]>
  export type LocalizacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | Localizacion$activosArgs<ExtArgs>
    _count?: boolean | LocalizacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalizacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocalizacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocalizacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacion"
    objects: {
      activos: Prisma.$ActivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["localizacion"]>
    composites: {}
  }

  type LocalizacionGetPayload<S extends boolean | null | undefined | LocalizacionDefaultArgs> = $Result.GetResult<Prisma.$LocalizacionPayload, S>

  type LocalizacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacionCountAggregateInputType | true
    }

  export interface LocalizacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacion'], meta: { name: 'Localizacion' } }
    /**
     * Find zero or one Localizacion that matches the filter.
     * @param {LocalizacionFindUniqueArgs} args - Arguments to find a Localizacion
     * @example
     * // Get one Localizacion
     * const localizacion = await prisma.localizacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacionFindUniqueArgs>(args: SelectSubset<T, LocalizacionFindUniqueArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacionFindUniqueOrThrowArgs} args - Arguments to find a Localizacion
     * @example
     * // Get one Localizacion
     * const localizacion = await prisma.localizacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacionFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionFindFirstArgs} args - Arguments to find a Localizacion
     * @example
     * // Get one Localizacion
     * const localizacion = await prisma.localizacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacionFindFirstArgs>(args?: SelectSubset<T, LocalizacionFindFirstArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionFindFirstOrThrowArgs} args - Arguments to find a Localizacion
     * @example
     * // Get one Localizacion
     * const localizacion = await prisma.localizacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacionFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacions
     * const localizacions = await prisma.localizacion.findMany()
     * 
     * // Get first 10 Localizacions
     * const localizacions = await prisma.localizacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacionWithIdOnly = await prisma.localizacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacionFindManyArgs>(args?: SelectSubset<T, LocalizacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacion.
     * @param {LocalizacionCreateArgs} args - Arguments to create a Localizacion.
     * @example
     * // Create one Localizacion
     * const Localizacion = await prisma.localizacion.create({
     *   data: {
     *     // ... data to create a Localizacion
     *   }
     * })
     * 
     */
    create<T extends LocalizacionCreateArgs>(args: SelectSubset<T, LocalizacionCreateArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacions.
     * @param {LocalizacionCreateManyArgs} args - Arguments to create many Localizacions.
     * @example
     * // Create many Localizacions
     * const localizacion = await prisma.localizacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacionCreateManyArgs>(args?: SelectSubset<T, LocalizacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizacions and returns the data saved in the database.
     * @param {LocalizacionCreateManyAndReturnArgs} args - Arguments to create many Localizacions.
     * @example
     * // Create many Localizacions
     * const localizacion = await prisma.localizacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizacions and only return the `id`
     * const localizacionWithIdOnly = await prisma.localizacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalizacionCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalizacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localizacion.
     * @param {LocalizacionDeleteArgs} args - Arguments to delete one Localizacion.
     * @example
     * // Delete one Localizacion
     * const Localizacion = await prisma.localizacion.delete({
     *   where: {
     *     // ... filter to delete one Localizacion
     *   }
     * })
     * 
     */
    delete<T extends LocalizacionDeleteArgs>(args: SelectSubset<T, LocalizacionDeleteArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacion.
     * @param {LocalizacionUpdateArgs} args - Arguments to update one Localizacion.
     * @example
     * // Update one Localizacion
     * const localizacion = await prisma.localizacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacionUpdateArgs>(args: SelectSubset<T, LocalizacionUpdateArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacions.
     * @param {LocalizacionDeleteManyArgs} args - Arguments to filter Localizacions to delete.
     * @example
     * // Delete a few Localizacions
     * const { count } = await prisma.localizacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacionDeleteManyArgs>(args?: SelectSubset<T, LocalizacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacions
     * const localizacion = await prisma.localizacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacionUpdateManyArgs>(args: SelectSubset<T, LocalizacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacions and returns the data updated in the database.
     * @param {LocalizacionUpdateManyAndReturnArgs} args - Arguments to update many Localizacions.
     * @example
     * // Update many Localizacions
     * const localizacion = await prisma.localizacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizacions and only return the `id`
     * const localizacionWithIdOnly = await prisma.localizacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalizacionUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalizacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localizacion.
     * @param {LocalizacionUpsertArgs} args - Arguments to update or create a Localizacion.
     * @example
     * // Update or create a Localizacion
     * const localizacion = await prisma.localizacion.upsert({
     *   create: {
     *     // ... data to create a Localizacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacion we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacionUpsertArgs>(args: SelectSubset<T, LocalizacionUpsertArgs<ExtArgs>>): Prisma__LocalizacionClient<$Result.GetResult<Prisma.$LocalizacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionCountArgs} args - Arguments to filter Localizacions to count.
     * @example
     * // Count the number of Localizacions
     * const count = await prisma.localizacion.count({
     *   where: {
     *     // ... the filter for the Localizacions we want to count
     *   }
     * })
    **/
    count<T extends LocalizacionCountArgs>(
      args?: Subset<T, LocalizacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalizacionAggregateArgs>(args: Subset<T, LocalizacionAggregateArgs>): Prisma.PrismaPromise<GetLocalizacionAggregateType<T>>

    /**
     * Group by Localizacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalizacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacionGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalizacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacion model
   */
  readonly fields: LocalizacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activos<T extends Localizacion$activosArgs<ExtArgs> = {}>(args?: Subset<T, Localizacion$activosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localizacion model
   */
  interface LocalizacionFieldRefs {
    readonly id: FieldRef<"Localizacion", 'Int'>
    readonly nombre: FieldRef<"Localizacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Localizacion findUnique
   */
  export type LocalizacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter, which Localizacion to fetch.
     */
    where: LocalizacionWhereUniqueInput
  }

  /**
   * Localizacion findUniqueOrThrow
   */
  export type LocalizacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter, which Localizacion to fetch.
     */
    where: LocalizacionWhereUniqueInput
  }

  /**
   * Localizacion findFirst
   */
  export type LocalizacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter, which Localizacion to fetch.
     */
    where?: LocalizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacions to fetch.
     */
    orderBy?: LocalizacionOrderByWithRelationInput | LocalizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacions.
     */
    cursor?: LocalizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacions.
     */
    distinct?: LocalizacionScalarFieldEnum | LocalizacionScalarFieldEnum[]
  }

  /**
   * Localizacion findFirstOrThrow
   */
  export type LocalizacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter, which Localizacion to fetch.
     */
    where?: LocalizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacions to fetch.
     */
    orderBy?: LocalizacionOrderByWithRelationInput | LocalizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacions.
     */
    cursor?: LocalizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacions.
     */
    distinct?: LocalizacionScalarFieldEnum | LocalizacionScalarFieldEnum[]
  }

  /**
   * Localizacion findMany
   */
  export type LocalizacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter, which Localizacions to fetch.
     */
    where?: LocalizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacions to fetch.
     */
    orderBy?: LocalizacionOrderByWithRelationInput | LocalizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacions.
     */
    cursor?: LocalizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacions.
     */
    skip?: number
    distinct?: LocalizacionScalarFieldEnum | LocalizacionScalarFieldEnum[]
  }

  /**
   * Localizacion create
   */
  export type LocalizacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacion.
     */
    data: XOR<LocalizacionCreateInput, LocalizacionUncheckedCreateInput>
  }

  /**
   * Localizacion createMany
   */
  export type LocalizacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacions.
     */
    data: LocalizacionCreateManyInput | LocalizacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacion createManyAndReturn
   */
  export type LocalizacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * The data used to create many Localizacions.
     */
    data: LocalizacionCreateManyInput | LocalizacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacion update
   */
  export type LocalizacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacion.
     */
    data: XOR<LocalizacionUpdateInput, LocalizacionUncheckedUpdateInput>
    /**
     * Choose, which Localizacion to update.
     */
    where: LocalizacionWhereUniqueInput
  }

  /**
   * Localizacion updateMany
   */
  export type LocalizacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacions.
     */
    data: XOR<LocalizacionUpdateManyMutationInput, LocalizacionUncheckedUpdateManyInput>
    /**
     * Filter which Localizacions to update
     */
    where?: LocalizacionWhereInput
    /**
     * Limit how many Localizacions to update.
     */
    limit?: number
  }

  /**
   * Localizacion updateManyAndReturn
   */
  export type LocalizacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * The data used to update Localizacions.
     */
    data: XOR<LocalizacionUpdateManyMutationInput, LocalizacionUncheckedUpdateManyInput>
    /**
     * Filter which Localizacions to update
     */
    where?: LocalizacionWhereInput
    /**
     * Limit how many Localizacions to update.
     */
    limit?: number
  }

  /**
   * Localizacion upsert
   */
  export type LocalizacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacion to update in case it exists.
     */
    where: LocalizacionWhereUniqueInput
    /**
     * In case the Localizacion found by the `where` argument doesn't exist, create a new Localizacion with this data.
     */
    create: XOR<LocalizacionCreateInput, LocalizacionUncheckedCreateInput>
    /**
     * In case the Localizacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacionUpdateInput, LocalizacionUncheckedUpdateInput>
  }

  /**
   * Localizacion delete
   */
  export type LocalizacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
    /**
     * Filter which Localizacion to delete.
     */
    where: LocalizacionWhereUniqueInput
  }

  /**
   * Localizacion deleteMany
   */
  export type LocalizacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacions to delete
     */
    where?: LocalizacionWhereInput
    /**
     * Limit how many Localizacions to delete.
     */
    limit?: number
  }

  /**
   * Localizacion.activos
   */
  export type Localizacion$activosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    where?: ActivoWhereInput
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    cursor?: ActivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Localizacion without action
   */
  export type LocalizacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacion
     */
    select?: LocalizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacion
     */
    omit?: LocalizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacionInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    activos?: boolean | Categoria$activosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activos?: boolean | Categoria$activosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      activos: Prisma.$ActivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activos<T extends Categoria$activosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$activosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.activos
   */
  export type Categoria$activosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activo
     */
    select?: ActivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activo
     */
    omit?: ActivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivoInclude<ExtArgs> | null
    where?: ActivoWhereInput
    orderBy?: ActivoOrderByWithRelationInput | ActivoOrderByWithRelationInput[]
    cursor?: ActivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivoScalarFieldEnum | ActivoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActivoScalarFieldEnum: {
    id: 'id',
    numeroSerie: 'numeroSerie',
    numeroEquipo: 'numeroEquipo',
    descripcion: 'descripcion',
    status: 'status',
    fechaRegistro: 'fechaRegistro',
    localizacionId: 'localizacionId',
    tipoActivoId: 'tipoActivoId',
    usuarioId: 'usuarioId',
    categoriaId: 'categoriaId'
  };

  export type ActivoScalarFieldEnum = (typeof ActivoScalarFieldEnum)[keyof typeof ActivoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TipoActivoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type TipoActivoScalarFieldEnum = (typeof TipoActivoScalarFieldEnum)[keyof typeof TipoActivoScalarFieldEnum]


  export const LocalizacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type LocalizacionScalarFieldEnum = (typeof LocalizacionScalarFieldEnum)[keyof typeof LocalizacionScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ActivoWhereInput = {
    AND?: ActivoWhereInput | ActivoWhereInput[]
    OR?: ActivoWhereInput[]
    NOT?: ActivoWhereInput | ActivoWhereInput[]
    id?: IntFilter<"Activo"> | number
    numeroSerie?: StringFilter<"Activo"> | string
    numeroEquipo?: IntFilter<"Activo"> | number
    descripcion?: StringFilter<"Activo"> | string
    status?: StringFilter<"Activo"> | string
    fechaRegistro?: DateTimeFilter<"Activo"> | Date | string
    localizacionId?: IntFilter<"Activo"> | number
    tipoActivoId?: IntFilter<"Activo"> | number
    usuarioId?: IntFilter<"Activo"> | number
    categoriaId?: IntFilter<"Activo"> | number
    localizacion?: XOR<LocalizacionScalarRelationFilter, LocalizacionWhereInput>
    tipoActivo?: XOR<TipoActivoScalarRelationFilter, TipoActivoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type ActivoOrderByWithRelationInput = {
    id?: SortOrder
    numeroSerie?: SortOrder
    numeroEquipo?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    fechaRegistro?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacion?: LocalizacionOrderByWithRelationInput
    tipoActivo?: TipoActivoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type ActivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroSerie?: string
    AND?: ActivoWhereInput | ActivoWhereInput[]
    OR?: ActivoWhereInput[]
    NOT?: ActivoWhereInput | ActivoWhereInput[]
    numeroEquipo?: IntFilter<"Activo"> | number
    descripcion?: StringFilter<"Activo"> | string
    status?: StringFilter<"Activo"> | string
    fechaRegistro?: DateTimeFilter<"Activo"> | Date | string
    localizacionId?: IntFilter<"Activo"> | number
    tipoActivoId?: IntFilter<"Activo"> | number
    usuarioId?: IntFilter<"Activo"> | number
    categoriaId?: IntFilter<"Activo"> | number
    localizacion?: XOR<LocalizacionScalarRelationFilter, LocalizacionWhereInput>
    tipoActivo?: XOR<TipoActivoScalarRelationFilter, TipoActivoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "id" | "numeroSerie">

  export type ActivoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroSerie?: SortOrder
    numeroEquipo?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    fechaRegistro?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    _count?: ActivoCountOrderByAggregateInput
    _avg?: ActivoAvgOrderByAggregateInput
    _max?: ActivoMaxOrderByAggregateInput
    _min?: ActivoMinOrderByAggregateInput
    _sum?: ActivoSumOrderByAggregateInput
  }

  export type ActivoScalarWhereWithAggregatesInput = {
    AND?: ActivoScalarWhereWithAggregatesInput | ActivoScalarWhereWithAggregatesInput[]
    OR?: ActivoScalarWhereWithAggregatesInput[]
    NOT?: ActivoScalarWhereWithAggregatesInput | ActivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activo"> | number
    numeroSerie?: StringWithAggregatesFilter<"Activo"> | string
    numeroEquipo?: IntWithAggregatesFilter<"Activo"> | number
    descripcion?: StringWithAggregatesFilter<"Activo"> | string
    status?: StringWithAggregatesFilter<"Activo"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"Activo"> | Date | string
    localizacionId?: IntWithAggregatesFilter<"Activo"> | number
    tipoActivoId?: IntWithAggregatesFilter<"Activo"> | number
    usuarioId?: IntWithAggregatesFilter<"Activo"> | number
    categoriaId?: IntWithAggregatesFilter<"Activo"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    name?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    activos?: ActivoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    activos?: ActivoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    name?: StringFilter<"Usuario"> | string
    activos?: ActivoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    name?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type TipoActivoWhereInput = {
    AND?: TipoActivoWhereInput | TipoActivoWhereInput[]
    OR?: TipoActivoWhereInput[]
    NOT?: TipoActivoWhereInput | TipoActivoWhereInput[]
    id?: IntFilter<"TipoActivo"> | number
    nombre?: StringFilter<"TipoActivo"> | string
    activos?: ActivoListRelationFilter
  }

  export type TipoActivoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activos?: ActivoOrderByRelationAggregateInput
  }

  export type TipoActivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoActivoWhereInput | TipoActivoWhereInput[]
    OR?: TipoActivoWhereInput[]
    NOT?: TipoActivoWhereInput | TipoActivoWhereInput[]
    nombre?: StringFilter<"TipoActivo"> | string
    activos?: ActivoListRelationFilter
  }, "id">

  export type TipoActivoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: TipoActivoCountOrderByAggregateInput
    _avg?: TipoActivoAvgOrderByAggregateInput
    _max?: TipoActivoMaxOrderByAggregateInput
    _min?: TipoActivoMinOrderByAggregateInput
    _sum?: TipoActivoSumOrderByAggregateInput
  }

  export type TipoActivoScalarWhereWithAggregatesInput = {
    AND?: TipoActivoScalarWhereWithAggregatesInput | TipoActivoScalarWhereWithAggregatesInput[]
    OR?: TipoActivoScalarWhereWithAggregatesInput[]
    NOT?: TipoActivoScalarWhereWithAggregatesInput | TipoActivoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoActivo"> | number
    nombre?: StringWithAggregatesFilter<"TipoActivo"> | string
  }

  export type LocalizacionWhereInput = {
    AND?: LocalizacionWhereInput | LocalizacionWhereInput[]
    OR?: LocalizacionWhereInput[]
    NOT?: LocalizacionWhereInput | LocalizacionWhereInput[]
    id?: IntFilter<"Localizacion"> | number
    nombre?: StringFilter<"Localizacion"> | string
    activos?: ActivoListRelationFilter
  }

  export type LocalizacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activos?: ActivoOrderByRelationAggregateInput
  }

  export type LocalizacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizacionWhereInput | LocalizacionWhereInput[]
    OR?: LocalizacionWhereInput[]
    NOT?: LocalizacionWhereInput | LocalizacionWhereInput[]
    nombre?: StringFilter<"Localizacion"> | string
    activos?: ActivoListRelationFilter
  }, "id">

  export type LocalizacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: LocalizacionCountOrderByAggregateInput
    _avg?: LocalizacionAvgOrderByAggregateInput
    _max?: LocalizacionMaxOrderByAggregateInput
    _min?: LocalizacionMinOrderByAggregateInput
    _sum?: LocalizacionSumOrderByAggregateInput
  }

  export type LocalizacionScalarWhereWithAggregatesInput = {
    AND?: LocalizacionScalarWhereWithAggregatesInput | LocalizacionScalarWhereWithAggregatesInput[]
    OR?: LocalizacionScalarWhereWithAggregatesInput[]
    NOT?: LocalizacionScalarWhereWithAggregatesInput | LocalizacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacion"> | number
    nombre?: StringWithAggregatesFilter<"Localizacion"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    activos?: ActivoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activos?: ActivoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    activos?: ActivoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ActivoCreateInput = {
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacion: LocalizacionCreateNestedOneWithoutActivosInput
    tipoActivo: TipoActivoCreateNestedOneWithoutActivosInput
    usuario: UsuarioCreateNestedOneWithoutActivosInput
    categoria: CategoriaCreateNestedOneWithoutActivosInput
  }

  export type ActivoUncheckedCreateInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoUpdateInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacion?: LocalizacionUpdateOneRequiredWithoutActivosNestedInput
    tipoActivo?: TipoActivoUpdateOneRequiredWithoutActivosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutActivosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutActivosNestedInput
  }

  export type ActivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoCreateManyInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoUpdateManyMutationInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    name: string
    email: string
    activos?: ActivoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    activos?: ActivoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UsuarioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TipoActivoCreateInput = {
    nombre: string
    activos?: ActivoCreateNestedManyWithoutTipoActivoInput
  }

  export type TipoActivoUncheckedCreateInput = {
    id?: number
    nombre: string
    activos?: ActivoUncheckedCreateNestedManyWithoutTipoActivoInput
  }

  export type TipoActivoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUpdateManyWithoutTipoActivoNestedInput
  }

  export type TipoActivoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUncheckedUpdateManyWithoutTipoActivoNestedInput
  }

  export type TipoActivoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type TipoActivoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoActivoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacionCreateInput = {
    nombre: string
    activos?: ActivoCreateNestedManyWithoutLocalizacionInput
  }

  export type LocalizacionUncheckedCreateInput = {
    id?: number
    nombre: string
    activos?: ActivoUncheckedCreateNestedManyWithoutLocalizacionInput
  }

  export type LocalizacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUpdateManyWithoutLocalizacionNestedInput
  }

  export type LocalizacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUncheckedUpdateManyWithoutLocalizacionNestedInput
  }

  export type LocalizacionCreateManyInput = {
    id?: number
    nombre: string
  }

  export type LocalizacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    activos?: ActivoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    activos?: ActivoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activos?: ActivoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocalizacionScalarRelationFilter = {
    is?: LocalizacionWhereInput
    isNot?: LocalizacionWhereInput
  }

  export type TipoActivoScalarRelationFilter = {
    is?: TipoActivoWhereInput
    isNot?: TipoActivoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ActivoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroSerie?: SortOrder
    numeroEquipo?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    fechaRegistro?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ActivoAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroEquipo?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ActivoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroSerie?: SortOrder
    numeroEquipo?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    fechaRegistro?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ActivoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroSerie?: SortOrder
    numeroEquipo?: SortOrder
    descripcion?: SortOrder
    status?: SortOrder
    fechaRegistro?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type ActivoSumOrderByAggregateInput = {
    id?: SortOrder
    numeroEquipo?: SortOrder
    localizacionId?: SortOrder
    tipoActivoId?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ActivoListRelationFilter = {
    every?: ActivoWhereInput
    some?: ActivoWhereInput
    none?: ActivoWhereInput
  }

  export type ActivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoActivoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoActivoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoActivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoActivoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type TipoActivoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LocalizacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LocalizacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type LocalizacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacionCreateNestedOneWithoutActivosInput = {
    create?: XOR<LocalizacionCreateWithoutActivosInput, LocalizacionUncheckedCreateWithoutActivosInput>
    connectOrCreate?: LocalizacionCreateOrConnectWithoutActivosInput
    connect?: LocalizacionWhereUniqueInput
  }

  export type TipoActivoCreateNestedOneWithoutActivosInput = {
    create?: XOR<TipoActivoCreateWithoutActivosInput, TipoActivoUncheckedCreateWithoutActivosInput>
    connectOrCreate?: TipoActivoCreateOrConnectWithoutActivosInput
    connect?: TipoActivoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutActivosInput = {
    create?: XOR<UsuarioCreateWithoutActivosInput, UsuarioUncheckedCreateWithoutActivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActivosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutActivosInput = {
    create?: XOR<CategoriaCreateWithoutActivosInput, CategoriaUncheckedCreateWithoutActivosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutActivosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocalizacionUpdateOneRequiredWithoutActivosNestedInput = {
    create?: XOR<LocalizacionCreateWithoutActivosInput, LocalizacionUncheckedCreateWithoutActivosInput>
    connectOrCreate?: LocalizacionCreateOrConnectWithoutActivosInput
    upsert?: LocalizacionUpsertWithoutActivosInput
    connect?: LocalizacionWhereUniqueInput
    update?: XOR<XOR<LocalizacionUpdateToOneWithWhereWithoutActivosInput, LocalizacionUpdateWithoutActivosInput>, LocalizacionUncheckedUpdateWithoutActivosInput>
  }

  export type TipoActivoUpdateOneRequiredWithoutActivosNestedInput = {
    create?: XOR<TipoActivoCreateWithoutActivosInput, TipoActivoUncheckedCreateWithoutActivosInput>
    connectOrCreate?: TipoActivoCreateOrConnectWithoutActivosInput
    upsert?: TipoActivoUpsertWithoutActivosInput
    connect?: TipoActivoWhereUniqueInput
    update?: XOR<XOR<TipoActivoUpdateToOneWithWhereWithoutActivosInput, TipoActivoUpdateWithoutActivosInput>, TipoActivoUncheckedUpdateWithoutActivosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutActivosNestedInput = {
    create?: XOR<UsuarioCreateWithoutActivosInput, UsuarioUncheckedCreateWithoutActivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutActivosInput
    upsert?: UsuarioUpsertWithoutActivosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutActivosInput, UsuarioUpdateWithoutActivosInput>, UsuarioUncheckedUpdateWithoutActivosInput>
  }

  export type CategoriaUpdateOneRequiredWithoutActivosNestedInput = {
    create?: XOR<CategoriaCreateWithoutActivosInput, CategoriaUncheckedCreateWithoutActivosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutActivosInput
    upsert?: CategoriaUpsertWithoutActivosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutActivosInput, CategoriaUpdateWithoutActivosInput>, CategoriaUncheckedUpdateWithoutActivosInput>
  }

  export type ActivoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput> | ActivoCreateWithoutUsuarioInput[] | ActivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutUsuarioInput | ActivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ActivoCreateManyUsuarioInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput> | ActivoCreateWithoutUsuarioInput[] | ActivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutUsuarioInput | ActivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ActivoCreateManyUsuarioInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput> | ActivoCreateWithoutUsuarioInput[] | ActivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutUsuarioInput | ActivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutUsuarioInput | ActivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ActivoCreateManyUsuarioInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutUsuarioInput | ActivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutUsuarioInput | ActivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput> | ActivoCreateWithoutUsuarioInput[] | ActivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutUsuarioInput | ActivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutUsuarioInput | ActivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ActivoCreateManyUsuarioInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutUsuarioInput | ActivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutUsuarioInput | ActivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoCreateNestedManyWithoutTipoActivoInput = {
    create?: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput> | ActivoCreateWithoutTipoActivoInput[] | ActivoUncheckedCreateWithoutTipoActivoInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutTipoActivoInput | ActivoCreateOrConnectWithoutTipoActivoInput[]
    createMany?: ActivoCreateManyTipoActivoInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUncheckedCreateNestedManyWithoutTipoActivoInput = {
    create?: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput> | ActivoCreateWithoutTipoActivoInput[] | ActivoUncheckedCreateWithoutTipoActivoInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutTipoActivoInput | ActivoCreateOrConnectWithoutTipoActivoInput[]
    createMany?: ActivoCreateManyTipoActivoInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUpdateManyWithoutTipoActivoNestedInput = {
    create?: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput> | ActivoCreateWithoutTipoActivoInput[] | ActivoUncheckedCreateWithoutTipoActivoInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutTipoActivoInput | ActivoCreateOrConnectWithoutTipoActivoInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutTipoActivoInput | ActivoUpsertWithWhereUniqueWithoutTipoActivoInput[]
    createMany?: ActivoCreateManyTipoActivoInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutTipoActivoInput | ActivoUpdateWithWhereUniqueWithoutTipoActivoInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutTipoActivoInput | ActivoUpdateManyWithWhereWithoutTipoActivoInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoUncheckedUpdateManyWithoutTipoActivoNestedInput = {
    create?: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput> | ActivoCreateWithoutTipoActivoInput[] | ActivoUncheckedCreateWithoutTipoActivoInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutTipoActivoInput | ActivoCreateOrConnectWithoutTipoActivoInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutTipoActivoInput | ActivoUpsertWithWhereUniqueWithoutTipoActivoInput[]
    createMany?: ActivoCreateManyTipoActivoInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutTipoActivoInput | ActivoUpdateWithWhereUniqueWithoutTipoActivoInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutTipoActivoInput | ActivoUpdateManyWithWhereWithoutTipoActivoInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoCreateNestedManyWithoutLocalizacionInput = {
    create?: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput> | ActivoCreateWithoutLocalizacionInput[] | ActivoUncheckedCreateWithoutLocalizacionInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutLocalizacionInput | ActivoCreateOrConnectWithoutLocalizacionInput[]
    createMany?: ActivoCreateManyLocalizacionInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUncheckedCreateNestedManyWithoutLocalizacionInput = {
    create?: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput> | ActivoCreateWithoutLocalizacionInput[] | ActivoUncheckedCreateWithoutLocalizacionInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutLocalizacionInput | ActivoCreateOrConnectWithoutLocalizacionInput[]
    createMany?: ActivoCreateManyLocalizacionInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUpdateManyWithoutLocalizacionNestedInput = {
    create?: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput> | ActivoCreateWithoutLocalizacionInput[] | ActivoUncheckedCreateWithoutLocalizacionInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutLocalizacionInput | ActivoCreateOrConnectWithoutLocalizacionInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutLocalizacionInput | ActivoUpsertWithWhereUniqueWithoutLocalizacionInput[]
    createMany?: ActivoCreateManyLocalizacionInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutLocalizacionInput | ActivoUpdateWithWhereUniqueWithoutLocalizacionInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutLocalizacionInput | ActivoUpdateManyWithWhereWithoutLocalizacionInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoUncheckedUpdateManyWithoutLocalizacionNestedInput = {
    create?: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput> | ActivoCreateWithoutLocalizacionInput[] | ActivoUncheckedCreateWithoutLocalizacionInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutLocalizacionInput | ActivoCreateOrConnectWithoutLocalizacionInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutLocalizacionInput | ActivoUpsertWithWhereUniqueWithoutLocalizacionInput[]
    createMany?: ActivoCreateManyLocalizacionInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutLocalizacionInput | ActivoUpdateWithWhereUniqueWithoutLocalizacionInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutLocalizacionInput | ActivoUpdateManyWithWhereWithoutLocalizacionInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput> | ActivoCreateWithoutCategoriaInput[] | ActivoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutCategoriaInput | ActivoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ActivoCreateManyCategoriaInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput> | ActivoCreateWithoutCategoriaInput[] | ActivoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutCategoriaInput | ActivoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ActivoCreateManyCategoriaInputEnvelope
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
  }

  export type ActivoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput> | ActivoCreateWithoutCategoriaInput[] | ActivoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutCategoriaInput | ActivoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutCategoriaInput | ActivoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ActivoCreateManyCategoriaInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutCategoriaInput | ActivoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutCategoriaInput | ActivoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type ActivoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput> | ActivoCreateWithoutCategoriaInput[] | ActivoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ActivoCreateOrConnectWithoutCategoriaInput | ActivoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ActivoUpsertWithWhereUniqueWithoutCategoriaInput | ActivoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ActivoCreateManyCategoriaInputEnvelope
    set?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    disconnect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    delete?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    connect?: ActivoWhereUniqueInput | ActivoWhereUniqueInput[]
    update?: ActivoUpdateWithWhereUniqueWithoutCategoriaInput | ActivoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ActivoUpdateManyWithWhereWithoutCategoriaInput | ActivoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LocalizacionCreateWithoutActivosInput = {
    nombre: string
  }

  export type LocalizacionUncheckedCreateWithoutActivosInput = {
    id?: number
    nombre: string
  }

  export type LocalizacionCreateOrConnectWithoutActivosInput = {
    where: LocalizacionWhereUniqueInput
    create: XOR<LocalizacionCreateWithoutActivosInput, LocalizacionUncheckedCreateWithoutActivosInput>
  }

  export type TipoActivoCreateWithoutActivosInput = {
    nombre: string
  }

  export type TipoActivoUncheckedCreateWithoutActivosInput = {
    id?: number
    nombre: string
  }

  export type TipoActivoCreateOrConnectWithoutActivosInput = {
    where: TipoActivoWhereUniqueInput
    create: XOR<TipoActivoCreateWithoutActivosInput, TipoActivoUncheckedCreateWithoutActivosInput>
  }

  export type UsuarioCreateWithoutActivosInput = {
    name: string
    email: string
  }

  export type UsuarioUncheckedCreateWithoutActivosInput = {
    id?: number
    name: string
    email: string
  }

  export type UsuarioCreateOrConnectWithoutActivosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutActivosInput, UsuarioUncheckedCreateWithoutActivosInput>
  }

  export type CategoriaCreateWithoutActivosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutActivosInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutActivosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutActivosInput, CategoriaUncheckedCreateWithoutActivosInput>
  }

  export type LocalizacionUpsertWithoutActivosInput = {
    update: XOR<LocalizacionUpdateWithoutActivosInput, LocalizacionUncheckedUpdateWithoutActivosInput>
    create: XOR<LocalizacionCreateWithoutActivosInput, LocalizacionUncheckedCreateWithoutActivosInput>
    where?: LocalizacionWhereInput
  }

  export type LocalizacionUpdateToOneWithWhereWithoutActivosInput = {
    where?: LocalizacionWhereInput
    data: XOR<LocalizacionUpdateWithoutActivosInput, LocalizacionUncheckedUpdateWithoutActivosInput>
  }

  export type LocalizacionUpdateWithoutActivosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacionUncheckedUpdateWithoutActivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoActivoUpsertWithoutActivosInput = {
    update: XOR<TipoActivoUpdateWithoutActivosInput, TipoActivoUncheckedUpdateWithoutActivosInput>
    create: XOR<TipoActivoCreateWithoutActivosInput, TipoActivoUncheckedCreateWithoutActivosInput>
    where?: TipoActivoWhereInput
  }

  export type TipoActivoUpdateToOneWithWhereWithoutActivosInput = {
    where?: TipoActivoWhereInput
    data: XOR<TipoActivoUpdateWithoutActivosInput, TipoActivoUncheckedUpdateWithoutActivosInput>
  }

  export type TipoActivoUpdateWithoutActivosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TipoActivoUncheckedUpdateWithoutActivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutActivosInput = {
    update: XOR<UsuarioUpdateWithoutActivosInput, UsuarioUncheckedUpdateWithoutActivosInput>
    create: XOR<UsuarioCreateWithoutActivosInput, UsuarioUncheckedCreateWithoutActivosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutActivosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutActivosInput, UsuarioUncheckedUpdateWithoutActivosInput>
  }

  export type UsuarioUpdateWithoutActivosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutActivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUpsertWithoutActivosInput = {
    update: XOR<CategoriaUpdateWithoutActivosInput, CategoriaUncheckedUpdateWithoutActivosInput>
    create: XOR<CategoriaCreateWithoutActivosInput, CategoriaUncheckedCreateWithoutActivosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutActivosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutActivosInput, CategoriaUncheckedUpdateWithoutActivosInput>
  }

  export type CategoriaUpdateWithoutActivosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutActivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ActivoCreateWithoutUsuarioInput = {
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacion: LocalizacionCreateNestedOneWithoutActivosInput
    tipoActivo: TipoActivoCreateNestedOneWithoutActivosInput
    categoria: CategoriaCreateNestedOneWithoutActivosInput
  }

  export type ActivoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    categoriaId: number
  }

  export type ActivoCreateOrConnectWithoutUsuarioInput = {
    where: ActivoWhereUniqueInput
    create: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput>
  }

  export type ActivoCreateManyUsuarioInputEnvelope = {
    data: ActivoCreateManyUsuarioInput | ActivoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ActivoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ActivoWhereUniqueInput
    update: XOR<ActivoUpdateWithoutUsuarioInput, ActivoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ActivoCreateWithoutUsuarioInput, ActivoUncheckedCreateWithoutUsuarioInput>
  }

  export type ActivoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ActivoWhereUniqueInput
    data: XOR<ActivoUpdateWithoutUsuarioInput, ActivoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ActivoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ActivoScalarWhereInput
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ActivoScalarWhereInput = {
    AND?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
    OR?: ActivoScalarWhereInput[]
    NOT?: ActivoScalarWhereInput | ActivoScalarWhereInput[]
    id?: IntFilter<"Activo"> | number
    numeroSerie?: StringFilter<"Activo"> | string
    numeroEquipo?: IntFilter<"Activo"> | number
    descripcion?: StringFilter<"Activo"> | string
    status?: StringFilter<"Activo"> | string
    fechaRegistro?: DateTimeFilter<"Activo"> | Date | string
    localizacionId?: IntFilter<"Activo"> | number
    tipoActivoId?: IntFilter<"Activo"> | number
    usuarioId?: IntFilter<"Activo"> | number
    categoriaId?: IntFilter<"Activo"> | number
  }

  export type ActivoCreateWithoutTipoActivoInput = {
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacion: LocalizacionCreateNestedOneWithoutActivosInput
    usuario: UsuarioCreateNestedOneWithoutActivosInput
    categoria: CategoriaCreateNestedOneWithoutActivosInput
  }

  export type ActivoUncheckedCreateWithoutTipoActivoInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoCreateOrConnectWithoutTipoActivoInput = {
    where: ActivoWhereUniqueInput
    create: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput>
  }

  export type ActivoCreateManyTipoActivoInputEnvelope = {
    data: ActivoCreateManyTipoActivoInput | ActivoCreateManyTipoActivoInput[]
    skipDuplicates?: boolean
  }

  export type ActivoUpsertWithWhereUniqueWithoutTipoActivoInput = {
    where: ActivoWhereUniqueInput
    update: XOR<ActivoUpdateWithoutTipoActivoInput, ActivoUncheckedUpdateWithoutTipoActivoInput>
    create: XOR<ActivoCreateWithoutTipoActivoInput, ActivoUncheckedCreateWithoutTipoActivoInput>
  }

  export type ActivoUpdateWithWhereUniqueWithoutTipoActivoInput = {
    where: ActivoWhereUniqueInput
    data: XOR<ActivoUpdateWithoutTipoActivoInput, ActivoUncheckedUpdateWithoutTipoActivoInput>
  }

  export type ActivoUpdateManyWithWhereWithoutTipoActivoInput = {
    where: ActivoScalarWhereInput
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyWithoutTipoActivoInput>
  }

  export type ActivoCreateWithoutLocalizacionInput = {
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    tipoActivo: TipoActivoCreateNestedOneWithoutActivosInput
    usuario: UsuarioCreateNestedOneWithoutActivosInput
    categoria: CategoriaCreateNestedOneWithoutActivosInput
  }

  export type ActivoUncheckedCreateWithoutLocalizacionInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoCreateOrConnectWithoutLocalizacionInput = {
    where: ActivoWhereUniqueInput
    create: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput>
  }

  export type ActivoCreateManyLocalizacionInputEnvelope = {
    data: ActivoCreateManyLocalizacionInput | ActivoCreateManyLocalizacionInput[]
    skipDuplicates?: boolean
  }

  export type ActivoUpsertWithWhereUniqueWithoutLocalizacionInput = {
    where: ActivoWhereUniqueInput
    update: XOR<ActivoUpdateWithoutLocalizacionInput, ActivoUncheckedUpdateWithoutLocalizacionInput>
    create: XOR<ActivoCreateWithoutLocalizacionInput, ActivoUncheckedCreateWithoutLocalizacionInput>
  }

  export type ActivoUpdateWithWhereUniqueWithoutLocalizacionInput = {
    where: ActivoWhereUniqueInput
    data: XOR<ActivoUpdateWithoutLocalizacionInput, ActivoUncheckedUpdateWithoutLocalizacionInput>
  }

  export type ActivoUpdateManyWithWhereWithoutLocalizacionInput = {
    where: ActivoScalarWhereInput
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyWithoutLocalizacionInput>
  }

  export type ActivoCreateWithoutCategoriaInput = {
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacion: LocalizacionCreateNestedOneWithoutActivosInput
    tipoActivo: TipoActivoCreateNestedOneWithoutActivosInput
    usuario: UsuarioCreateNestedOneWithoutActivosInput
  }

  export type ActivoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
  }

  export type ActivoCreateOrConnectWithoutCategoriaInput = {
    where: ActivoWhereUniqueInput
    create: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput>
  }

  export type ActivoCreateManyCategoriaInputEnvelope = {
    data: ActivoCreateManyCategoriaInput | ActivoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ActivoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ActivoWhereUniqueInput
    update: XOR<ActivoUpdateWithoutCategoriaInput, ActivoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ActivoCreateWithoutCategoriaInput, ActivoUncheckedCreateWithoutCategoriaInput>
  }

  export type ActivoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ActivoWhereUniqueInput
    data: XOR<ActivoUpdateWithoutCategoriaInput, ActivoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ActivoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ActivoScalarWhereInput
    data: XOR<ActivoUpdateManyMutationInput, ActivoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ActivoCreateManyUsuarioInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    categoriaId: number
  }

  export type ActivoUpdateWithoutUsuarioInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacion?: LocalizacionUpdateOneRequiredWithoutActivosNestedInput
    tipoActivo?: TipoActivoUpdateOneRequiredWithoutActivosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutActivosNestedInput
  }

  export type ActivoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoCreateManyTipoActivoInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoUpdateWithoutTipoActivoInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacion?: LocalizacionUpdateOneRequiredWithoutActivosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutActivosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutActivosNestedInput
  }

  export type ActivoUncheckedUpdateWithoutTipoActivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoUncheckedUpdateManyWithoutTipoActivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoCreateManyLocalizacionInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    tipoActivoId: number
    usuarioId: number
    categoriaId: number
  }

  export type ActivoUpdateWithoutLocalizacionInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoActivo?: TipoActivoUpdateOneRequiredWithoutActivosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutActivosNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutActivosNestedInput
  }

  export type ActivoUncheckedUpdateWithoutLocalizacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoUncheckedUpdateManyWithoutLocalizacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoCreateManyCategoriaInput = {
    id?: number
    numeroSerie: string
    numeroEquipo: number
    descripcion: string
    status: string
    fechaRegistro?: Date | string
    localizacionId: number
    tipoActivoId: number
    usuarioId: number
  }

  export type ActivoUpdateWithoutCategoriaInput = {
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacion?: LocalizacionUpdateOneRequiredWithoutActivosNestedInput
    tipoActivo?: TipoActivoUpdateOneRequiredWithoutActivosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutActivosNestedInput
  }

  export type ActivoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroSerie?: StringFieldUpdateOperationsInput | string
    numeroEquipo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacionId?: IntFieldUpdateOperationsInput | number
    tipoActivoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}