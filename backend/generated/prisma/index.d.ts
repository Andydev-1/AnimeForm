
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model Exercises
 * 
 */
export type Exercises = $Result.DefaultSelection<Prisma.$ExercisesPayload>
/**
 * Model Workouts
 * 
 */
export type Workouts = $Result.DefaultSelection<Prisma.$WorkoutsPayload>
/**
 * Model WorkoutExercises
 * 
 */
export type WorkoutExercises = $Result.DefaultSelection<Prisma.$WorkoutExercisesPayload>
/**
 * Model Achievements
 * 
 */
export type Achievements = $Result.DefaultSelection<Prisma.$AchievementsPayload>
/**
 * Model UserAchievements
 * 
 */
export type UserAchievements = $Result.DefaultSelection<Prisma.$UserAchievementsPayload>
/**
 * Model ProgressLogs
 * 
 */
export type ProgressLogs = $Result.DefaultSelection<Prisma.$ProgressLogsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  user: 'user',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Goal: {
  cut: 'cut',
  maintain: 'maintain',
  bulk: 'bulk'
};

export type Goal = (typeof Goal)[keyof typeof Goal]


export const FitnessLevel: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced'
};

export type FitnessLevel = (typeof FitnessLevel)[keyof typeof FitnessLevel]


export const CharacterDifficulty: {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced'
};

export type CharacterDifficulty = (typeof CharacterDifficulty)[keyof typeof CharacterDifficulty]


export const WorkoutCategory: {
  Strength: 'Strength',
  Endurance: 'Endurance',
  Agility: 'Agility',
  Mobility: 'Mobility'
};

export type WorkoutCategory = (typeof WorkoutCategory)[keyof typeof WorkoutCategory]


export const ProgressLogType: {
  XP: 'XP',
  WEIGHT: 'WEIGHT',
  WORKOUT_COMPLETED: 'WORKOUT_COMPLETED',
  SET_RECORDED: 'SET_RECORDED'
};

export type ProgressLogType = (typeof ProgressLogType)[keyof typeof ProgressLogType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Goal = $Enums.Goal

export const Goal: typeof $Enums.Goal

export type FitnessLevel = $Enums.FitnessLevel

export const FitnessLevel: typeof $Enums.FitnessLevel

export type CharacterDifficulty = $Enums.CharacterDifficulty

export const CharacterDifficulty: typeof $Enums.CharacterDifficulty

export type WorkoutCategory = $Enums.WorkoutCategory

export const WorkoutCategory: typeof $Enums.WorkoutCategory

export type ProgressLogType = $Enums.ProgressLogType

export const ProgressLogType: typeof $Enums.ProgressLogType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **Exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.ExercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workouts`: Exposes CRUD operations for the **Workouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workouts.findMany()
    * ```
    */
  get workouts(): Prisma.WorkoutsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercises`: Exposes CRUD operations for the **WorkoutExercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercises.findMany()
    * ```
    */
  get workoutExercises(): Prisma.WorkoutExercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievements`: Exposes CRUD operations for the **Achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.AchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievements`: Exposes CRUD operations for the **UserAchievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievements.findMany()
    * ```
    */
  get userAchievements(): Prisma.UserAchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressLogs`: Exposes CRUD operations for the **ProgressLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressLogs
    * const progressLogs = await prisma.progressLogs.findMany()
    * ```
    */
  get progressLogs(): Prisma.ProgressLogsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Profiles: 'Profiles',
    Characters: 'Characters',
    Exercises: 'Exercises',
    Workouts: 'Workouts',
    WorkoutExercises: 'WorkoutExercises',
    Achievements: 'Achievements',
    UserAchievements: 'UserAchievements',
    ProgressLogs: 'ProgressLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "profiles" | "characters" | "exercises" | "workouts" | "workoutExercises" | "achievements" | "userAchievements" | "progressLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharactersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharactersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      Exercises: {
        payload: Prisma.$ExercisesPayload<ExtArgs>
        fields: Prisma.ExercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          findFirst: {
            args: Prisma.ExercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          findMany: {
            args: Prisma.ExercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          create: {
            args: Prisma.ExercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          createMany: {
            args: Prisma.ExercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          delete: {
            args: Prisma.ExercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          update: {
            args: Prisma.ExercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          deleteMany: {
            args: Prisma.ExercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          upsert: {
            args: Prisma.ExercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.ExercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
      Workouts: {
        payload: Prisma.$WorkoutsPayload<ExtArgs>
        fields: Prisma.WorkoutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          findFirst: {
            args: Prisma.WorkoutsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          findMany: {
            args: Prisma.WorkoutsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>[]
          }
          create: {
            args: Prisma.WorkoutsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          createMany: {
            args: Prisma.WorkoutsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>[]
          }
          delete: {
            args: Prisma.WorkoutsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          update: {
            args: Prisma.WorkoutsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutsPayload>
          }
          aggregate: {
            args: Prisma.WorkoutsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkouts>
          }
          groupBy: {
            args: Prisma.WorkoutsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercises: {
        payload: Prisma.$WorkoutExercisesPayload<ExtArgs>
        fields: Prisma.WorkoutExercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          findFirst: {
            args: Prisma.WorkoutExercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          findMany: {
            args: Prisma.WorkoutExercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          create: {
            args: Prisma.WorkoutExercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          createMany: {
            args: Prisma.WorkoutExercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          delete: {
            args: Prisma.WorkoutExercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          update: {
            args: Prisma.WorkoutExercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          aggregate: {
            args: Prisma.WorkoutExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercises>
          }
          groupBy: {
            args: Prisma.WorkoutExercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExercisesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisesCountAggregateOutputType> | number
          }
        }
      }
      Achievements: {
        payload: Prisma.$AchievementsPayload<ExtArgs>
        fields: Prisma.AchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findFirst: {
            args: Prisma.AchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findMany: {
            args: Prisma.AchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          create: {
            args: Prisma.AchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          createMany: {
            args: Prisma.AchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          delete: {
            args: Prisma.AchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          update: {
            args: Prisma.AchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          deleteMany: {
            args: Prisma.AchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          upsert: {
            args: Prisma.AchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.AchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      UserAchievements: {
        payload: Prisma.$UserAchievementsPayload<ExtArgs>
        fields: Prisma.UserAchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          findMany: {
            args: Prisma.UserAchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>[]
          }
          create: {
            args: Prisma.UserAchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          createMany: {
            args: Prisma.UserAchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          update: {
            args: Prisma.UserAchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementsPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievements>
          }
          groupBy: {
            args: Prisma.UserAchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementsCountAggregateOutputType> | number
          }
        }
      }
      ProgressLogs: {
        payload: Prisma.$ProgressLogsPayload<ExtArgs>
        fields: Prisma.ProgressLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          findFirst: {
            args: Prisma.ProgressLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          findMany: {
            args: Prisma.ProgressLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>[]
          }
          create: {
            args: Prisma.ProgressLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          createMany: {
            args: Prisma.ProgressLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>[]
          }
          delete: {
            args: Prisma.ProgressLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          update: {
            args: Prisma.ProgressLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          deleteMany: {
            args: Prisma.ProgressLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>[]
          }
          upsert: {
            args: Prisma.ProgressLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressLogsPayload>
          }
          aggregate: {
            args: Prisma.ProgressLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressLogs>
          }
          groupBy: {
            args: Prisma.ProgressLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressLogsCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressLogsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    profiles?: ProfilesOmit
    characters?: CharactersOmit
    exercises?: ExercisesOmit
    workouts?: WorkoutsOmit
    workoutExercises?: WorkoutExercisesOmit
    achievements?: AchievementsOmit
    userAchievements?: UserAchievementsOmit
    progressLogs?: ProgressLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    ProgressLogs: number
    UserAchievements: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProgressLogs?: boolean | UsersCountOutputTypeCountProgressLogsArgs
    UserAchievements?: boolean | UsersCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementsWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    Workouts: number
    profiles: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workouts?: boolean | CharactersCountOutputTypeCountWorkoutsArgs
    profiles?: boolean | CharactersCountOutputTypeCountProfilesArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutsWhereInput
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
  }


  /**
   * Count Type ExercisesCountOutputType
   */

  export type ExercisesCountOutputType = {
    WorkoutExercises: number
  }

  export type ExercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | ExercisesCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExercisesCountOutputType
     */
    select?: ExercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
  }


  /**
   * Count Type WorkoutsCountOutputType
   */

  export type WorkoutsCountOutputType = {
    WorkoutExercises: number
    ProgressLogs: number
  }

  export type WorkoutsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | WorkoutsCountOutputTypeCountWorkoutExercisesArgs
    ProgressLogs?: boolean | WorkoutsCountOutputTypeCountProgressLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutsCountOutputType
     */
    select?: WorkoutsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
  }

  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeCountProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogsWhereInput
  }


  /**
   * Count Type WorkoutExercisesCountOutputType
   */

  export type WorkoutExercisesCountOutputType = {
    completedSetLogs: number
  }

  export type WorkoutExercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedSetLogs?: boolean | WorkoutExercisesCountOutputTypeCountCompletedSetLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutExercisesCountOutputType without action
   */
  export type WorkoutExercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisesCountOutputType
     */
    select?: WorkoutExercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutExercisesCountOutputType without action
   */
  export type WorkoutExercisesCountOutputTypeCountCompletedSetLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogsWhereInput
  }


  /**
   * Count Type AchievementsCountOutputType
   */

  export type AchievementsCountOutputType = {
    userAchievements: number
  }

  export type AchievementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | AchievementsCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementsCountOutputType
     */
    select?: AchievementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Profiles?: boolean | Users$ProfilesArgs<ExtArgs>
    ProgressLogs?: boolean | Users$ProgressLogsArgs<ExtArgs>
    UserAchievements?: boolean | Users$UserAchievementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profiles?: boolean | Users$ProfilesArgs<ExtArgs>
    ProgressLogs?: boolean | Users$ProgressLogsArgs<ExtArgs>
    UserAchievements?: boolean | Users$UserAchievementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Profiles: Prisma.$ProfilesPayload<ExtArgs> | null
      ProgressLogs: Prisma.$ProgressLogsPayload<ExtArgs>[]
      UserAchievements: Prisma.$UserAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Profiles<T extends Users$ProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ProfilesArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProgressLogs<T extends Users$ProgressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ProgressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserAchievements<T extends Users$UserAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Users$UserAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Profiles
   */
  export type Users$ProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
  }

  /**
   * Users.ProgressLogs
   */
  export type Users$ProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    where?: ProgressLogsWhereInput
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    cursor?: ProgressLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * Users.UserAchievements
   */
  export type Users$UserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    where?: UserAchievementsWhereInput
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    cursor?: UserAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementsScalarFieldEnum | UserAchievementsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    heightCm: number | null
    weightKg: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    heightCm: number | null
    weightKg: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    heightCm: number | null
    weightKg: number | null
    goal: $Enums.Goal | null
    fitnessLevel: $Enums.FitnessLevel | null
    selectedCharacterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    heightCm: number | null
    weightKg: number | null
    goal: $Enums.Goal | null
    fitnessLevel: $Enums.FitnessLevel | null
    selectedCharacterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    userId: number
    heightCm: number
    weightKg: number
    goal: number
    fitnessLevel: number
    selectedCharacterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    heightCm?: true
    weightKg?: true
  }

  export type ProfilesSumAggregateInputType = {
    heightCm?: true
    weightKg?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    userId?: true
    heightCm?: true
    weightKg?: true
    goal?: true
    fitnessLevel?: true
    selectedCharacterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    userId?: true
    heightCm?: true
    weightKg?: true
    goal?: true
    fitnessLevel?: true
    selectedCharacterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    userId?: true
    heightCm?: true
    weightKg?: true
    goal?: true
    fitnessLevel?: true
    selectedCharacterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    userId: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    selectedCharacterId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    heightCm?: boolean
    weightKg?: boolean
    goal?: boolean
    fitnessLevel?: boolean
    selectedCharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    heightCm?: boolean
    weightKg?: boolean
    goal?: boolean
    fitnessLevel?: boolean
    selectedCharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    heightCm?: boolean
    weightKg?: boolean
    goal?: boolean
    fitnessLevel?: boolean
    selectedCharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    id?: boolean
    userId?: boolean
    heightCm?: boolean
    weightKg?: boolean
    goal?: boolean
    fitnessLevel?: boolean
    selectedCharacterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "heightCm" | "weightKg" | "goal" | "fitnessLevel" | "selectedCharacterId" | "createdAt" | "updatedAt", ExtArgs["result"]["profiles"]>
  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }
  export type ProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    selectedCharacter?: boolean | Profiles$selectedCharacterArgs<ExtArgs>
  }

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      selectedCharacter: Prisma.$CharactersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      heightCm: number
      weightKg: number
      goal: $Enums.Goal
      fitnessLevel: $Enums.FitnessLevel
      selectedCharacterId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
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
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selectedCharacter<T extends Profiles$selectedCharacterArgs<ExtArgs> = {}>(args?: Subset<T, Profiles$selectedCharacterArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profiles model
   */
  interface ProfilesFieldRefs {
    readonly id: FieldRef<"Profiles", 'String'>
    readonly userId: FieldRef<"Profiles", 'String'>
    readonly heightCm: FieldRef<"Profiles", 'Int'>
    readonly weightKg: FieldRef<"Profiles", 'Float'>
    readonly goal: FieldRef<"Profiles", 'Goal'>
    readonly fitnessLevel: FieldRef<"Profiles", 'FitnessLevel'>
    readonly selectedCharacterId: FieldRef<"Profiles", 'String'>
    readonly createdAt: FieldRef<"Profiles", 'DateTime'>
    readonly updatedAt: FieldRef<"Profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles updateManyAndReturn
   */
  export type ProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profiles.selectedCharacter
   */
  export type Profiles$selectedCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    xpModifier: number | null
  }

  export type CharactersSumAggregateOutputType = {
    xpModifier: number | null
  }

  export type CharactersMinAggregateOutputType = {
    id: string | null
    name: string | null
    bodyType: string | null
    difficulty: $Enums.CharacterDifficulty | null
    trainingStyle: string | null
    xpModifier: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bodyType: string | null
    difficulty: $Enums.CharacterDifficulty | null
    trainingStyle: string | null
    xpModifier: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersCountAggregateOutputType = {
    id: number
    name: number
    bodyType: number
    difficulty: number
    trainingStyle: number
    xpModifier: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    xpModifier?: true
  }

  export type CharactersSumAggregateInputType = {
    xpModifier?: true
  }

  export type CharactersMinAggregateInputType = {
    id?: true
    name?: true
    bodyType?: true
    difficulty?: true
    trainingStyle?: true
    xpModifier?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersMaxAggregateInputType = {
    id?: true
    name?: true
    bodyType?: true
    difficulty?: true
    trainingStyle?: true
    xpModifier?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersCountAggregateInputType = {
    id?: true
    name?: true
    bodyType?: true
    difficulty?: true
    trainingStyle?: true
    xpModifier?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    id: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bodyType?: boolean
    difficulty?: boolean
    trainingStyle?: boolean
    xpModifier?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Workouts?: boolean | Characters$WorkoutsArgs<ExtArgs>
    profiles?: boolean | Characters$profilesArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bodyType?: boolean
    difficulty?: boolean
    trainingStyle?: boolean
    xpModifier?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bodyType?: boolean
    difficulty?: boolean
    trainingStyle?: boolean
    xpModifier?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectScalar = {
    id?: boolean
    name?: boolean
    bodyType?: boolean
    difficulty?: boolean
    trainingStyle?: boolean
    xpModifier?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharactersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bodyType" | "difficulty" | "trainingStyle" | "xpModifier" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["characters"]>
  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workouts?: boolean | Characters$WorkoutsArgs<ExtArgs>
    profiles?: boolean | Characters$profilesArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharactersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharactersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      Workouts: Prisma.$WorkoutsPayload<ExtArgs>[]
      profiles: Prisma.$ProfilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bodyType: string
      difficulty: $Enums.CharacterDifficulty
      trainingStyle: string
      xpModifier: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }

  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharactersFindUniqueArgs>(args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs>(args: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharactersFindFirstArgs>(args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs>(args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charactersWithIdOnly = await prisma.characters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharactersFindManyArgs>(args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
     */
    create<T extends CharactersCreateArgs>(args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharactersCreateManyArgs>(args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharactersCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const charactersWithIdOnly = await prisma.characters.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharactersCreateManyAndReturnArgs>(args?: SelectSubset<T, CharactersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
     */
    delete<T extends CharactersDeleteArgs>(args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharactersUpdateArgs>(args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharactersDeleteManyArgs>(args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharactersUpdateManyArgs>(args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharactersUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const charactersWithIdOnly = await prisma.characters.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharactersUpdateManyAndReturnArgs>(args: SelectSubset<T, CharactersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
     */
    upsert<T extends CharactersUpsertArgs>(args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
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
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Workouts<T extends Characters$WorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, Characters$WorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends Characters$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Characters$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Characters model
   */
  interface CharactersFieldRefs {
    readonly id: FieldRef<"Characters", 'String'>
    readonly name: FieldRef<"Characters", 'String'>
    readonly bodyType: FieldRef<"Characters", 'String'>
    readonly difficulty: FieldRef<"Characters", 'CharacterDifficulty'>
    readonly trainingStyle: FieldRef<"Characters", 'String'>
    readonly xpModifier: FieldRef<"Characters", 'Float'>
    readonly isActive: FieldRef<"Characters", 'Boolean'>
    readonly createdAt: FieldRef<"Characters", 'DateTime'>
    readonly updatedAt: FieldRef<"Characters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters createManyAndReturn
   */
  export type CharactersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Characters updateManyAndReturn
   */
  export type CharactersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Characters.Workouts
   */
  export type Characters$WorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    where?: WorkoutsWhereInput
    orderBy?: WorkoutsOrderByWithRelationInput | WorkoutsOrderByWithRelationInput[]
    cursor?: WorkoutsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * Characters.profiles
   */
  export type Characters$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    cursor?: ProfilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Characters
     */
    omit?: CharactersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model Exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.WorkoutCategory | null
    unit: string | null
    createdAt: Date | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.WorkoutCategory | null
    unit: string | null
    createdAt: Date | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    name: number
    category: number
    unit: number
    createdAt: number
    _all: number
  }


  export type ExercisesMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    unit?: true
    createdAt?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    unit?: true
    createdAt?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    unit?: true
    createdAt?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to aggregate.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type ExercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercisesWhereInput
    orderBy?: ExercisesOrderByWithAggregationInput | ExercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: ExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    id: string
    name: string
    category: $Enums.WorkoutCategory
    unit: string | null
    createdAt: Date
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends ExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type ExercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    unit?: boolean
    createdAt?: boolean
    WorkoutExercises?: boolean | Exercises$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    unit?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    unit?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    unit?: boolean
    createdAt?: boolean
  }

  export type ExercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "unit" | "createdAt", ExtArgs["result"]["exercises"]>
  export type ExercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | Exercises$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercises"
    objects: {
      WorkoutExercises: Prisma.$WorkoutExercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.WorkoutCategory
      unit: string | null
      createdAt: Date
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type ExercisesGetPayload<S extends boolean | null | undefined | ExercisesDefaultArgs> = $Result.GetResult<Prisma.$ExercisesPayload, S>

  type ExercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface ExercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercises'], meta: { name: 'Exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {ExercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExercisesFindUniqueArgs>(args: SelectSubset<T, ExercisesFindUniqueArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExercisesFindFirstArgs>(args?: SelectSubset<T, ExercisesFindFirstArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExercisesFindManyArgs>(args?: SelectSubset<T, ExercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercises.
     * @param {ExercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends ExercisesCreateArgs>(args: SelectSubset<T, ExercisesCreateArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExercisesCreateManyArgs>(args?: SelectSubset<T, ExercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExercisesCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercises.
     * @param {ExercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends ExercisesDeleteArgs>(args: SelectSubset<T, ExercisesDeleteArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercises.
     * @param {ExercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExercisesUpdateArgs>(args: SelectSubset<T, ExercisesUpdateArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExercisesDeleteManyArgs>(args?: SelectSubset<T, ExercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExercisesUpdateManyArgs>(args: SelectSubset<T, ExercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExercisesUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercises.
     * @param {ExercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends ExercisesUpsertArgs>(args: SelectSubset<T, ExercisesUpsertArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExercisesCountArgs>(
      args?: Subset<T, ExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesGroupByArgs} args - Group by arguments.
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
      T extends ExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExercisesGroupByArgs['orderBy'] }
        : { orderBy?: ExercisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercises model
   */
  readonly fields: ExercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WorkoutExercises<T extends Exercises$WorkoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercises$WorkoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercises model
   */
  interface ExercisesFieldRefs {
    readonly id: FieldRef<"Exercises", 'String'>
    readonly name: FieldRef<"Exercises", 'String'>
    readonly category: FieldRef<"Exercises", 'WorkoutCategory'>
    readonly unit: FieldRef<"Exercises", 'String'>
    readonly createdAt: FieldRef<"Exercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercises findUnique
   */
  export type ExercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises findUniqueOrThrow
   */
  export type ExercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises findFirst
   */
  export type ExercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises findFirstOrThrow
   */
  export type ExercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises findMany
   */
  export type ExercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises create
   */
  export type ExercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercises.
     */
    data: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
  }

  /**
   * Exercises createMany
   */
  export type ExercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExercisesCreateManyInput | ExercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercises createManyAndReturn
   */
  export type ExercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExercisesCreateManyInput | ExercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercises update
   */
  export type ExercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercises.
     */
    data: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
    /**
     * Choose, which Exercises to update.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises updateMany
   */
  export type ExercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercises updateManyAndReturn
   */
  export type ExercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercises upsert
   */
  export type ExercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercises to update in case it exists.
     */
    where: ExercisesWhereUniqueInput
    /**
     * In case the Exercises found by the `where` argument doesn't exist, create a new Exercises with this data.
     */
    create: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
    /**
     * In case the Exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
  }

  /**
   * Exercises delete
   */
  export type ExercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter which Exercises to delete.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises deleteMany
   */
  export type ExercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercises.WorkoutExercises
   */
  export type Exercises$WorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    cursor?: WorkoutExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * Exercises without action
   */
  export type ExercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
  }


  /**
   * Model Workouts
   */

  export type AggregateWorkouts = {
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  export type WorkoutsAvgAggregateOutputType = {
    dayIndex: number | null
    targetMin: number | null
  }

  export type WorkoutsSumAggregateOutputType = {
    dayIndex: number | null
    targetMin: number | null
  }

  export type WorkoutsMinAggregateOutputType = {
    id: string | null
    characterId: string | null
    dayIndex: number | null
    category: $Enums.WorkoutCategory | null
    title: string | null
    targetMin: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WorkoutsMaxAggregateOutputType = {
    id: string | null
    characterId: string | null
    dayIndex: number | null
    category: $Enums.WorkoutCategory | null
    title: string | null
    targetMin: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WorkoutsCountAggregateOutputType = {
    id: number
    characterId: number
    dayIndex: number
    category: number
    title: number
    targetMin: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type WorkoutsAvgAggregateInputType = {
    dayIndex?: true
    targetMin?: true
  }

  export type WorkoutsSumAggregateInputType = {
    dayIndex?: true
    targetMin?: true
  }

  export type WorkoutsMinAggregateInputType = {
    id?: true
    characterId?: true
    dayIndex?: true
    category?: true
    title?: true
    targetMin?: true
    isActive?: true
    createdAt?: true
  }

  export type WorkoutsMaxAggregateInputType = {
    id?: true
    characterId?: true
    dayIndex?: true
    category?: true
    title?: true
    targetMin?: true
    isActive?: true
    createdAt?: true
  }

  export type WorkoutsCountAggregateInputType = {
    id?: true
    characterId?: true
    dayIndex?: true
    category?: true
    title?: true
    targetMin?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to aggregate.
     */
    where?: WorkoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutsOrderByWithRelationInput | WorkoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutsMaxAggregateInputType
  }

  export type GetWorkoutsAggregateType<T extends WorkoutsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkouts[P]>
      : GetScalarType<T[P], AggregateWorkouts[P]>
  }




  export type WorkoutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutsWhereInput
    orderBy?: WorkoutsOrderByWithAggregationInput | WorkoutsOrderByWithAggregationInput[]
    by: WorkoutsScalarFieldEnum[] | WorkoutsScalarFieldEnum
    having?: WorkoutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutsCountAggregateInputType | true
    _avg?: WorkoutsAvgAggregateInputType
    _sum?: WorkoutsSumAggregateInputType
    _min?: WorkoutsMinAggregateInputType
    _max?: WorkoutsMaxAggregateInputType
  }

  export type WorkoutsGroupByOutputType = {
    id: string
    characterId: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin: number | null
    isActive: boolean
    createdAt: Date
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  type GetWorkoutsGroupByPayload<T extends WorkoutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    dayIndex?: boolean
    category?: boolean
    title?: boolean
    targetMin?: boolean
    isActive?: boolean
    createdAt?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
    WorkoutExercises?: boolean | Workouts$WorkoutExercisesArgs<ExtArgs>
    ProgressLogs?: boolean | Workouts$ProgressLogsArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type WorkoutsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    dayIndex?: boolean
    category?: boolean
    title?: boolean
    targetMin?: boolean
    isActive?: boolean
    createdAt?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type WorkoutsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    dayIndex?: boolean
    category?: boolean
    title?: boolean
    targetMin?: boolean
    isActive?: boolean
    createdAt?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>

  export type WorkoutsSelectScalar = {
    id?: boolean
    characterId?: boolean
    dayIndex?: boolean
    category?: boolean
    title?: boolean
    targetMin?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type WorkoutsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "dayIndex" | "category" | "title" | "targetMin" | "isActive" | "createdAt", ExtArgs["result"]["workouts"]>
  export type WorkoutsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
    WorkoutExercises?: boolean | Workouts$WorkoutExercisesArgs<ExtArgs>
    ProgressLogs?: boolean | Workouts$ProgressLogsArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }
  export type WorkoutsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }

  export type $WorkoutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workouts"
    objects: {
      character: Prisma.$CharactersPayload<ExtArgs>
      WorkoutExercises: Prisma.$WorkoutExercisesPayload<ExtArgs>[]
      ProgressLogs: Prisma.$ProgressLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      characterId: string
      dayIndex: number
      category: $Enums.WorkoutCategory
      title: string
      targetMin: number | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["workouts"]>
    composites: {}
  }

  type WorkoutsGetPayload<S extends boolean | null | undefined | WorkoutsDefaultArgs> = $Result.GetResult<Prisma.$WorkoutsPayload, S>

  type WorkoutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutsCountAggregateInputType | true
    }

  export interface WorkoutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workouts'], meta: { name: 'Workouts' } }
    /**
     * Find zero or one Workouts that matches the filter.
     * @param {WorkoutsFindUniqueArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutsFindUniqueArgs>(args: SelectSubset<T, WorkoutsFindUniqueArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workouts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutsFindUniqueOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsFindFirstArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutsFindFirstArgs>(args?: SelectSubset<T, WorkoutsFindFirstArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsFindFirstOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workouts.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workouts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutsWithIdOnly = await prisma.workouts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutsFindManyArgs>(args?: SelectSubset<T, WorkoutsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workouts.
     * @param {WorkoutsCreateArgs} args - Arguments to create a Workouts.
     * @example
     * // Create one Workouts
     * const Workouts = await prisma.workouts.create({
     *   data: {
     *     // ... data to create a Workouts
     *   }
     * })
     * 
     */
    create<T extends WorkoutsCreateArgs>(args: SelectSubset<T, WorkoutsCreateArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutsCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workouts = await prisma.workouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutsCreateManyArgs>(args?: SelectSubset<T, WorkoutsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutsCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workouts = await prisma.workouts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutsWithIdOnly = await prisma.workouts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workouts.
     * @param {WorkoutsDeleteArgs} args - Arguments to delete one Workouts.
     * @example
     * // Delete one Workouts
     * const Workouts = await prisma.workouts.delete({
     *   where: {
     *     // ... filter to delete one Workouts
     *   }
     * })
     * 
     */
    delete<T extends WorkoutsDeleteArgs>(args: SelectSubset<T, WorkoutsDeleteArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workouts.
     * @param {WorkoutsUpdateArgs} args - Arguments to update one Workouts.
     * @example
     * // Update one Workouts
     * const workouts = await prisma.workouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutsUpdateArgs>(args: SelectSubset<T, WorkoutsUpdateArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutsDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutsDeleteManyArgs>(args?: SelectSubset<T, WorkoutsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workouts = await prisma.workouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutsUpdateManyArgs>(args: SelectSubset<T, WorkoutsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutsUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workouts = await prisma.workouts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutsWithIdOnly = await prisma.workouts.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workouts.
     * @param {WorkoutsUpsertArgs} args - Arguments to update or create a Workouts.
     * @example
     * // Update or create a Workouts
     * const workouts = await prisma.workouts.upsert({
     *   create: {
     *     // ... data to create a Workouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workouts we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutsUpsertArgs>(args: SelectSubset<T, WorkoutsUpsertArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workouts.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutsCountArgs>(
      args?: Subset<T, WorkoutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutsAggregateArgs>(args: Subset<T, WorkoutsAggregateArgs>): Prisma.PrismaPromise<GetWorkoutsAggregateType<T>>

    /**
     * Group by Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsGroupByArgs} args - Group by arguments.
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
      T extends WorkoutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutsGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workouts model
   */
  readonly fields: WorkoutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WorkoutExercises<T extends Workouts$WorkoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workouts$WorkoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProgressLogs<T extends Workouts$ProgressLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workouts$ProgressLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workouts model
   */
  interface WorkoutsFieldRefs {
    readonly id: FieldRef<"Workouts", 'String'>
    readonly characterId: FieldRef<"Workouts", 'String'>
    readonly dayIndex: FieldRef<"Workouts", 'Int'>
    readonly category: FieldRef<"Workouts", 'WorkoutCategory'>
    readonly title: FieldRef<"Workouts", 'String'>
    readonly targetMin: FieldRef<"Workouts", 'Int'>
    readonly isActive: FieldRef<"Workouts", 'Boolean'>
    readonly createdAt: FieldRef<"Workouts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workouts findUnique
   */
  export type WorkoutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where: WorkoutsWhereUniqueInput
  }

  /**
   * Workouts findUniqueOrThrow
   */
  export type WorkoutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where: WorkoutsWhereUniqueInput
  }

  /**
   * Workouts findFirst
   */
  export type WorkoutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutsOrderByWithRelationInput | WorkoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * Workouts findFirstOrThrow
   */
  export type WorkoutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutsOrderByWithRelationInput | WorkoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * Workouts findMany
   */
  export type WorkoutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutsOrderByWithRelationInput | WorkoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * Workouts create
   */
  export type WorkoutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * The data needed to create a Workouts.
     */
    data: XOR<WorkoutsCreateInput, WorkoutsUncheckedCreateInput>
  }

  /**
   * Workouts createMany
   */
  export type WorkoutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutsCreateManyInput | WorkoutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workouts createManyAndReturn
   */
  export type WorkoutsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutsCreateManyInput | WorkoutsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workouts update
   */
  export type WorkoutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * The data needed to update a Workouts.
     */
    data: XOR<WorkoutsUpdateInput, WorkoutsUncheckedUpdateInput>
    /**
     * Choose, which Workouts to update.
     */
    where: WorkoutsWhereUniqueInput
  }

  /**
   * Workouts updateMany
   */
  export type WorkoutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutsUpdateManyMutationInput, WorkoutsUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutsWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workouts updateManyAndReturn
   */
  export type WorkoutsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutsUpdateManyMutationInput, WorkoutsUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutsWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workouts upsert
   */
  export type WorkoutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * The filter to search for the Workouts to update in case it exists.
     */
    where: WorkoutsWhereUniqueInput
    /**
     * In case the Workouts found by the `where` argument doesn't exist, create a new Workouts with this data.
     */
    create: XOR<WorkoutsCreateInput, WorkoutsUncheckedCreateInput>
    /**
     * In case the Workouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutsUpdateInput, WorkoutsUncheckedUpdateInput>
  }

  /**
   * Workouts delete
   */
  export type WorkoutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    /**
     * Filter which Workouts to delete.
     */
    where: WorkoutsWhereUniqueInput
  }

  /**
   * Workouts deleteMany
   */
  export type WorkoutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutsWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workouts.WorkoutExercises
   */
  export type Workouts$WorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    cursor?: WorkoutExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * Workouts.ProgressLogs
   */
  export type Workouts$ProgressLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    where?: ProgressLogsWhereInput
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    cursor?: ProgressLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * Workouts without action
   */
  export type WorkoutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercises
   */

  export type AggregateWorkoutExercises = {
    _count: WorkoutExercisesCountAggregateOutputType | null
    _avg: WorkoutExercisesAvgAggregateOutputType | null
    _sum: WorkoutExercisesSumAggregateOutputType | null
    _min: WorkoutExercisesMinAggregateOutputType | null
    _max: WorkoutExercisesMaxAggregateOutputType | null
  }

  export type WorkoutExercisesAvgAggregateOutputType = {
    sortOrder: number | null
    sets: number | null
    repsTarget: number | null
    restSec: number | null
  }

  export type WorkoutExercisesSumAggregateOutputType = {
    sortOrder: number | null
    sets: number | null
    repsTarget: number | null
    restSec: number | null
  }

  export type WorkoutExercisesMinAggregateOutputType = {
    id: string | null
    workoutId: string | null
    exerciseId: string | null
    sortOrder: number | null
    sets: number | null
    repsTarget: number | null
    restSec: number | null
  }

  export type WorkoutExercisesMaxAggregateOutputType = {
    id: string | null
    workoutId: string | null
    exerciseId: string | null
    sortOrder: number | null
    sets: number | null
    repsTarget: number | null
    restSec: number | null
  }

  export type WorkoutExercisesCountAggregateOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    _all: number
  }


  export type WorkoutExercisesAvgAggregateInputType = {
    sortOrder?: true
    sets?: true
    repsTarget?: true
    restSec?: true
  }

  export type WorkoutExercisesSumAggregateInputType = {
    sortOrder?: true
    sets?: true
    repsTarget?: true
    restSec?: true
  }

  export type WorkoutExercisesMinAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    sortOrder?: true
    sets?: true
    repsTarget?: true
    restSec?: true
  }

  export type WorkoutExercisesMaxAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    sortOrder?: true
    sets?: true
    repsTarget?: true
    restSec?: true
  }

  export type WorkoutExercisesCountAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    sortOrder?: true
    sets?: true
    repsTarget?: true
    restSec?: true
    _all?: true
  }

  export type WorkoutExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to aggregate.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExercisesMaxAggregateInputType
  }

  export type GetWorkoutExercisesAggregateType<T extends WorkoutExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercises[P]>
      : GetScalarType<T[P], AggregateWorkoutExercises[P]>
  }




  export type WorkoutExercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithAggregationInput | WorkoutExercisesOrderByWithAggregationInput[]
    by: WorkoutExercisesScalarFieldEnum[] | WorkoutExercisesScalarFieldEnum
    having?: WorkoutExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExercisesCountAggregateInputType | true
    _avg?: WorkoutExercisesAvgAggregateInputType
    _sum?: WorkoutExercisesSumAggregateInputType
    _min?: WorkoutExercisesMinAggregateInputType
    _max?: WorkoutExercisesMaxAggregateInputType
  }

  export type WorkoutExercisesGroupByOutputType = {
    id: string
    workoutId: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    _count: WorkoutExercisesCountAggregateOutputType | null
    _avg: WorkoutExercisesAvgAggregateOutputType | null
    _sum: WorkoutExercisesSumAggregateOutputType | null
    _min: WorkoutExercisesMinAggregateOutputType | null
    _max: WorkoutExercisesMaxAggregateOutputType | null
  }

  type GetWorkoutExercisesGroupByPayload<T extends WorkoutExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExercisesGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    sortOrder?: boolean
    sets?: boolean
    repsTarget?: boolean
    restSec?: boolean
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
    completedSetLogs?: boolean | WorkoutExercises$completedSetLogsArgs<ExtArgs>
    _count?: boolean | WorkoutExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    sortOrder?: boolean
    sets?: boolean
    repsTarget?: boolean
    restSec?: boolean
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    sortOrder?: boolean
    sets?: boolean
    repsTarget?: boolean
    restSec?: boolean
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectScalar = {
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    sortOrder?: boolean
    sets?: boolean
    repsTarget?: boolean
    restSec?: boolean
  }

  export type WorkoutExercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "exerciseId" | "sortOrder" | "sets" | "repsTarget" | "restSec", ExtArgs["result"]["workoutExercises"]>
  export type WorkoutExercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
    completedSetLogs?: boolean | WorkoutExercises$completedSetLogsArgs<ExtArgs>
    _count?: boolean | WorkoutExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutExercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
  }
  export type WorkoutExercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutsDefaultArgs<ExtArgs>
    exercise?: boolean | ExercisesDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercises"
    objects: {
      workout: Prisma.$WorkoutsPayload<ExtArgs>
      exercise: Prisma.$ExercisesPayload<ExtArgs>
      completedSetLogs: Prisma.$ProgressLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutId: string
      exerciseId: string
      sortOrder: number
      sets: number
      repsTarget: number
      restSec: number
    }, ExtArgs["result"]["workoutExercises"]>
    composites: {}
  }

  type WorkoutExercisesGetPayload<S extends boolean | null | undefined | WorkoutExercisesDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisesPayload, S>

  type WorkoutExercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExercisesCountAggregateInputType | true
    }

  export interface WorkoutExercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercises'], meta: { name: 'WorkoutExercises' } }
    /**
     * Find zero or one WorkoutExercises that matches the filter.
     * @param {WorkoutExercisesFindUniqueArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExercisesFindUniqueArgs>(args: SelectSubset<T, WorkoutExercisesFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExercisesFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindFirstArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExercisesFindFirstArgs>(args?: SelectSubset<T, WorkoutExercisesFindFirstArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExercisesFindManyArgs>(args?: SelectSubset<T, WorkoutExercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercises.
     * @param {WorkoutExercisesCreateArgs} args - Arguments to create a WorkoutExercises.
     * @example
     * // Create one WorkoutExercises
     * const WorkoutExercises = await prisma.workoutExercises.create({
     *   data: {
     *     // ... data to create a WorkoutExercises
     *   }
     * })
     * 
     */
    create<T extends WorkoutExercisesCreateArgs>(args: SelectSubset<T, WorkoutExercisesCreateArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExercisesCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExercisesCreateManyArgs>(args?: SelectSubset<T, WorkoutExercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExercisesCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercises.
     * @param {WorkoutExercisesDeleteArgs} args - Arguments to delete one WorkoutExercises.
     * @example
     * // Delete one WorkoutExercises
     * const WorkoutExercises = await prisma.workoutExercises.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercises
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExercisesDeleteArgs>(args: SelectSubset<T, WorkoutExercisesDeleteArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercises.
     * @param {WorkoutExercisesUpdateArgs} args - Arguments to update one WorkoutExercises.
     * @example
     * // Update one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExercisesUpdateArgs>(args: SelectSubset<T, WorkoutExercisesUpdateArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExercisesDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExercisesDeleteManyArgs>(args?: SelectSubset<T, WorkoutExercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExercisesUpdateManyArgs>(args: SelectSubset<T, WorkoutExercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExercisesUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutExercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercises.
     * @param {WorkoutExercisesUpsertArgs} args - Arguments to update or create a WorkoutExercises.
     * @example
     * // Update or create a WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExercisesUpsertArgs>(args: SelectSubset<T, WorkoutExercisesUpsertArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercises.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExercisesCountArgs>(
      args?: Subset<T, WorkoutExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExercisesAggregateArgs>(args: Subset<T, WorkoutExercisesAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExercisesAggregateType<T>>

    /**
     * Group by WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExercisesGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExercisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercises model
   */
  readonly fields: WorkoutExercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutsDefaultArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExercisesDefaultArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedSetLogs<T extends WorkoutExercises$completedSetLogsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutExercises$completedSetLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutExercises model
   */
  interface WorkoutExercisesFieldRefs {
    readonly id: FieldRef<"WorkoutExercises", 'String'>
    readonly workoutId: FieldRef<"WorkoutExercises", 'String'>
    readonly exerciseId: FieldRef<"WorkoutExercises", 'String'>
    readonly sortOrder: FieldRef<"WorkoutExercises", 'Int'>
    readonly sets: FieldRef<"WorkoutExercises", 'Int'>
    readonly repsTarget: FieldRef<"WorkoutExercises", 'Int'>
    readonly restSec: FieldRef<"WorkoutExercises", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercises findUnique
   */
  export type WorkoutExercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises findUniqueOrThrow
   */
  export type WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises findFirst
   */
  export type WorkoutExercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises findFirstOrThrow
   */
  export type WorkoutExercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises findMany
   */
  export type WorkoutExercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises create
   */
  export type WorkoutExercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercises.
     */
    data: XOR<WorkoutExercisesCreateInput, WorkoutExercisesUncheckedCreateInput>
  }

  /**
   * WorkoutExercises createMany
   */
  export type WorkoutExercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExercisesCreateManyInput | WorkoutExercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercises createManyAndReturn
   */
  export type WorkoutExercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExercisesCreateManyInput | WorkoutExercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercises update
   */
  export type WorkoutExercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateInput, WorkoutExercisesUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercises to update.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises updateMany
   */
  export type WorkoutExercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercises updateManyAndReturn
   */
  export type WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercises upsert
   */
  export type WorkoutExercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercises to update in case it exists.
     */
    where: WorkoutExercisesWhereUniqueInput
    /**
     * In case the WorkoutExercises found by the `where` argument doesn't exist, create a new WorkoutExercises with this data.
     */
    create: XOR<WorkoutExercisesCreateInput, WorkoutExercisesUncheckedCreateInput>
    /**
     * In case the WorkoutExercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExercisesUpdateInput, WorkoutExercisesUncheckedUpdateInput>
  }

  /**
   * WorkoutExercises delete
   */
  export type WorkoutExercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercises to delete.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises deleteMany
   */
  export type WorkoutExercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercises.completedSetLogs
   */
  export type WorkoutExercises$completedSetLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    where?: ProgressLogsWhereInput
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    cursor?: ProgressLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * WorkoutExercises without action
   */
  export type WorkoutExercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
  }


  /**
   * Model Achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsAvgAggregateOutputType = {
    criteriaValue: number | null
  }

  export type AchievementsSumAggregateOutputType = {
    criteriaValue: number | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    criteriaType: string | null
    criteriaValue: number | null
    isHidden: boolean | null
    createdAt: Date | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    criteriaType: string | null
    criteriaValue: number | null
    isHidden: boolean | null
    createdAt: Date | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    key: number
    name: number
    description: number
    criteriaType: number
    criteriaValue: number
    isHidden: number
    createdAt: number
    _all: number
  }


  export type AchievementsAvgAggregateInputType = {
    criteriaValue?: true
  }

  export type AchievementsSumAggregateInputType = {
    criteriaValue?: true
  }

  export type AchievementsMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    criteriaType?: true
    criteriaValue?: true
    isHidden?: true
    createdAt?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    criteriaType?: true
    criteriaValue?: true
    isHidden?: true
    createdAt?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    criteriaType?: true
    criteriaValue?: true
    isHidden?: true
    createdAt?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to aggregate.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type AchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementsWhereInput
    orderBy?: AchievementsOrderByWithAggregationInput | AchievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: AchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _avg?: AchievementsAvgAggregateInputType
    _sum?: AchievementsSumAggregateInputType
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden: boolean
    createdAt: Date
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends AchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type AchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    criteriaType?: boolean
    criteriaValue?: boolean
    isHidden?: boolean
    createdAt?: boolean
    userAchievements?: boolean | Achievements$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    criteriaType?: boolean
    criteriaValue?: boolean
    isHidden?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    criteriaType?: boolean
    criteriaValue?: boolean
    isHidden?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievements"]>

  export type AchievementsSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    criteriaType?: boolean
    criteriaValue?: boolean
    isHidden?: boolean
    createdAt?: boolean
  }

  export type AchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "description" | "criteriaType" | "criteriaValue" | "isHidden" | "createdAt", ExtArgs["result"]["achievements"]>
  export type AchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | Achievements$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievements"
    objects: {
      userAchievements: Prisma.$UserAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      description: string
      criteriaType: string
      criteriaValue: number
      isHidden: boolean
      createdAt: Date
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type AchievementsGetPayload<S extends boolean | null | undefined | AchievementsDefaultArgs> = $Result.GetResult<Prisma.$AchievementsPayload, S>

  type AchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface AchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievements'], meta: { name: 'Achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {AchievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementsFindUniqueArgs>(args: SelectSubset<T, AchievementsFindUniqueArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementsFindFirstArgs>(args?: SelectSubset<T, AchievementsFindFirstArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementsFindManyArgs>(args?: SelectSubset<T, AchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievements.
     * @param {AchievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends AchievementsCreateArgs>(args: SelectSubset<T, AchievementsCreateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementsCreateManyArgs>(args?: SelectSubset<T, AchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementsCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievements.
     * @param {AchievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends AchievementsDeleteArgs>(args: SelectSubset<T, AchievementsDeleteArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievements.
     * @param {AchievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementsUpdateArgs>(args: SelectSubset<T, AchievementsUpdateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementsDeleteManyArgs>(args?: SelectSubset<T, AchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementsUpdateManyArgs>(args: SelectSubset<T, AchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementsUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievements.
     * @param {AchievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends AchievementsUpsertArgs>(args: SelectSubset<T, AchievementsUpsertArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementsCountArgs>(
      args?: Subset<T, AchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsGroupByArgs} args - Group by arguments.
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
      T extends AchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementsGroupByArgs['orderBy'] }
        : { orderBy?: AchievementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievements model
   */
  readonly fields: AchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAchievements<T extends Achievements$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievements$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Achievements model
   */
  interface AchievementsFieldRefs {
    readonly id: FieldRef<"Achievements", 'String'>
    readonly key: FieldRef<"Achievements", 'String'>
    readonly name: FieldRef<"Achievements", 'String'>
    readonly description: FieldRef<"Achievements", 'String'>
    readonly criteriaType: FieldRef<"Achievements", 'String'>
    readonly criteriaValue: FieldRef<"Achievements", 'Int'>
    readonly isHidden: FieldRef<"Achievements", 'Boolean'>
    readonly createdAt: FieldRef<"Achievements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievements findUnique
   */
  export type AchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findUniqueOrThrow
   */
  export type AchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findFirst
   */
  export type AchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findFirstOrThrow
   */
  export type AchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findMany
   */
  export type AchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements create
   */
  export type AchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievements.
     */
    data: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
  }

  /**
   * Achievements createMany
   */
  export type AchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementsCreateManyInput | AchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievements createManyAndReturn
   */
  export type AchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementsCreateManyInput | AchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievements update
   */
  export type AchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievements.
     */
    data: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
    /**
     * Choose, which Achievements to update.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements updateMany
   */
  export type AchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementsUpdateManyMutationInput, AchievementsUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievements updateManyAndReturn
   */
  export type AchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementsUpdateManyMutationInput, AchievementsUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievements upsert
   */
  export type AchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievements to update in case it exists.
     */
    where: AchievementsWhereUniqueInput
    /**
     * In case the Achievements found by the `where` argument doesn't exist, create a new Achievements with this data.
     */
    create: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
    /**
     * In case the Achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
  }

  /**
   * Achievements delete
   */
  export type AchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter which Achievements to delete.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements deleteMany
   */
  export type AchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementsWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievements.userAchievements
   */
  export type Achievements$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    where?: UserAchievementsWhereInput
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    cursor?: UserAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementsScalarFieldEnum | UserAchievementsScalarFieldEnum[]
  }

  /**
   * Achievements without action
   */
  export type AchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievements
   */

  export type AggregateUserAchievements = {
    _count: UserAchievementsCountAggregateOutputType | null
    _min: UserAchievementsMinAggregateOutputType | null
    _max: UserAchievementsMaxAggregateOutputType | null
  }

  export type UserAchievementsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementsCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    unlockedAt: number
    _all: number
  }


  export type UserAchievementsMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
  }

  export type UserAchievementsMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
  }

  export type UserAchievementsCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
    _all?: true
  }

  export type UserAchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to aggregate.
     */
    where?: UserAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementsMaxAggregateInputType
  }

  export type GetUserAchievementsAggregateType<T extends UserAchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievements[P]>
      : GetScalarType<T[P], AggregateUserAchievements[P]>
  }




  export type UserAchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementsWhereInput
    orderBy?: UserAchievementsOrderByWithAggregationInput | UserAchievementsOrderByWithAggregationInput[]
    by: UserAchievementsScalarFieldEnum[] | UserAchievementsScalarFieldEnum
    having?: UserAchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementsCountAggregateInputType | true
    _min?: UserAchievementsMinAggregateInputType
    _max?: UserAchievementsMaxAggregateInputType
  }

  export type UserAchievementsGroupByOutputType = {
    id: string
    userId: string
    achievementId: string
    unlockedAt: Date
    _count: UserAchievementsCountAggregateOutputType | null
    _min: UserAchievementsMinAggregateOutputType | null
    _max: UserAchievementsMaxAggregateOutputType | null
  }

  type GetUserAchievementsGroupByPayload<T extends UserAchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementsGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievements"]>

  export type UserAchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievements"]>

  export type UserAchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievements"]>

  export type UserAchievementsSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
  }

  export type UserAchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievementId" | "unlockedAt", ExtArgs["result"]["userAchievements"]>
  export type UserAchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }
  export type UserAchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }
  export type UserAchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementsDefaultArgs<ExtArgs>
  }

  export type $UserAchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievements"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      achievement: Prisma.$AchievementsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievementId: string
      unlockedAt: Date
    }, ExtArgs["result"]["userAchievements"]>
    composites: {}
  }

  type UserAchievementsGetPayload<S extends boolean | null | undefined | UserAchievementsDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementsPayload, S>

  type UserAchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementsCountAggregateInputType | true
    }

  export interface UserAchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievements'], meta: { name: 'UserAchievements' } }
    /**
     * Find zero or one UserAchievements that matches the filter.
     * @param {UserAchievementsFindUniqueArgs} args - Arguments to find a UserAchievements
     * @example
     * // Get one UserAchievements
     * const userAchievements = await prisma.userAchievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementsFindUniqueArgs>(args: SelectSubset<T, UserAchievementsFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementsFindUniqueOrThrowArgs} args - Arguments to find a UserAchievements
     * @example
     * // Get one UserAchievements
     * const userAchievements = await prisma.userAchievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsFindFirstArgs} args - Arguments to find a UserAchievements
     * @example
     * // Get one UserAchievements
     * const userAchievements = await prisma.userAchievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementsFindFirstArgs>(args?: SelectSubset<T, UserAchievementsFindFirstArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsFindFirstOrThrowArgs} args - Arguments to find a UserAchievements
     * @example
     * // Get one UserAchievements
     * const userAchievements = await prisma.userAchievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievements.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementsWithIdOnly = await prisma.userAchievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementsFindManyArgs>(args?: SelectSubset<T, UserAchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievements.
     * @param {UserAchievementsCreateArgs} args - Arguments to create a UserAchievements.
     * @example
     * // Create one UserAchievements
     * const UserAchievements = await prisma.userAchievements.create({
     *   data: {
     *     // ... data to create a UserAchievements
     *   }
     * })
     * 
     */
    create<T extends UserAchievementsCreateArgs>(args: SelectSubset<T, UserAchievementsCreateArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementsCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievements = await prisma.userAchievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementsCreateManyArgs>(args?: SelectSubset<T, UserAchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementsCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievements = await prisma.userAchievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementsWithIdOnly = await prisma.userAchievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievements.
     * @param {UserAchievementsDeleteArgs} args - Arguments to delete one UserAchievements.
     * @example
     * // Delete one UserAchievements
     * const UserAchievements = await prisma.userAchievements.delete({
     *   where: {
     *     // ... filter to delete one UserAchievements
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementsDeleteArgs>(args: SelectSubset<T, UserAchievementsDeleteArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievements.
     * @param {UserAchievementsUpdateArgs} args - Arguments to update one UserAchievements.
     * @example
     * // Update one UserAchievements
     * const userAchievements = await prisma.userAchievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementsUpdateArgs>(args: SelectSubset<T, UserAchievementsUpdateArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementsDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementsDeleteManyArgs>(args?: SelectSubset<T, UserAchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievements = await prisma.userAchievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementsUpdateManyArgs>(args: SelectSubset<T, UserAchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementsUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievements = await prisma.userAchievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementsWithIdOnly = await prisma.userAchievements.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievements.
     * @param {UserAchievementsUpsertArgs} args - Arguments to update or create a UserAchievements.
     * @example
     * // Update or create a UserAchievements
     * const userAchievements = await prisma.userAchievements.upsert({
     *   create: {
     *     // ... data to create a UserAchievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievements we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementsUpsertArgs>(args: SelectSubset<T, UserAchievementsUpsertArgs<ExtArgs>>): Prisma__UserAchievementsClient<$Result.GetResult<Prisma.$UserAchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievements.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementsCountArgs>(
      args?: Subset<T, UserAchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementsAggregateArgs>(args: Subset<T, UserAchievementsAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementsAggregateType<T>>

    /**
     * Group by UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementsGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementsGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievements model
   */
  readonly fields: UserAchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementsDefaultArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAchievements model
   */
  interface UserAchievementsFieldRefs {
    readonly id: FieldRef<"UserAchievements", 'String'>
    readonly userId: FieldRef<"UserAchievements", 'String'>
    readonly achievementId: FieldRef<"UserAchievements", 'String'>
    readonly unlockedAt: FieldRef<"UserAchievements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievements findUnique
   */
  export type UserAchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where: UserAchievementsWhereUniqueInput
  }

  /**
   * UserAchievements findUniqueOrThrow
   */
  export type UserAchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where: UserAchievementsWhereUniqueInput
  }

  /**
   * UserAchievements findFirst
   */
  export type UserAchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementsScalarFieldEnum | UserAchievementsScalarFieldEnum[]
  }

  /**
   * UserAchievements findFirstOrThrow
   */
  export type UserAchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementsScalarFieldEnum | UserAchievementsScalarFieldEnum[]
  }

  /**
   * UserAchievements findMany
   */
  export type UserAchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementsOrderByWithRelationInput | UserAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementsScalarFieldEnum | UserAchievementsScalarFieldEnum[]
  }

  /**
   * UserAchievements create
   */
  export type UserAchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievements.
     */
    data: XOR<UserAchievementsCreateInput, UserAchievementsUncheckedCreateInput>
  }

  /**
   * UserAchievements createMany
   */
  export type UserAchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementsCreateManyInput | UserAchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievements createManyAndReturn
   */
  export type UserAchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementsCreateManyInput | UserAchievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievements update
   */
  export type UserAchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievements.
     */
    data: XOR<UserAchievementsUpdateInput, UserAchievementsUncheckedUpdateInput>
    /**
     * Choose, which UserAchievements to update.
     */
    where: UserAchievementsWhereUniqueInput
  }

  /**
   * UserAchievements updateMany
   */
  export type UserAchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementsUpdateManyMutationInput, UserAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementsWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievements updateManyAndReturn
   */
  export type UserAchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementsUpdateManyMutationInput, UserAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementsWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievements upsert
   */
  export type UserAchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievements to update in case it exists.
     */
    where: UserAchievementsWhereUniqueInput
    /**
     * In case the UserAchievements found by the `where` argument doesn't exist, create a new UserAchievements with this data.
     */
    create: XOR<UserAchievementsCreateInput, UserAchievementsUncheckedCreateInput>
    /**
     * In case the UserAchievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementsUpdateInput, UserAchievementsUncheckedUpdateInput>
  }

  /**
   * UserAchievements delete
   */
  export type UserAchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
    /**
     * Filter which UserAchievements to delete.
     */
    where: UserAchievementsWhereUniqueInput
  }

  /**
   * UserAchievements deleteMany
   */
  export type UserAchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementsWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievements without action
   */
  export type UserAchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievements
     */
    select?: UserAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievements
     */
    omit?: UserAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementsInclude<ExtArgs> | null
  }


  /**
   * Model ProgressLogs
   */

  export type AggregateProgressLogs = {
    _count: ProgressLogsCountAggregateOutputType | null
    _avg: ProgressLogsAvgAggregateOutputType | null
    _sum: ProgressLogsSumAggregateOutputType | null
    _min: ProgressLogsMinAggregateOutputType | null
    _max: ProgressLogsMaxAggregateOutputType | null
  }

  export type ProgressLogsAvgAggregateOutputType = {
    value: number | null
  }

  export type ProgressLogsSumAggregateOutputType = {
    value: number | null
  }

  export type ProgressLogsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ProgressLogType | null
    value: number | null
    loggedAt: Date | null
    workoutId: string | null
    workoutExerciseId: string | null
  }

  export type ProgressLogsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ProgressLogType | null
    value: number | null
    loggedAt: Date | null
    workoutId: string | null
    workoutExerciseId: string | null
  }

  export type ProgressLogsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    value: number
    meta: number
    loggedAt: number
    workoutId: number
    workoutExerciseId: number
    _all: number
  }


  export type ProgressLogsAvgAggregateInputType = {
    value?: true
  }

  export type ProgressLogsSumAggregateInputType = {
    value?: true
  }

  export type ProgressLogsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    loggedAt?: true
    workoutId?: true
    workoutExerciseId?: true
  }

  export type ProgressLogsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    loggedAt?: true
    workoutId?: true
    workoutExerciseId?: true
  }

  export type ProgressLogsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    meta?: true
    loggedAt?: true
    workoutId?: true
    workoutExerciseId?: true
    _all?: true
  }

  export type ProgressLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLogs to aggregate.
     */
    where?: ProgressLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressLogs
    **/
    _count?: true | ProgressLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressLogsMaxAggregateInputType
  }

  export type GetProgressLogsAggregateType<T extends ProgressLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressLogs[P]>
      : GetScalarType<T[P], AggregateProgressLogs[P]>
  }




  export type ProgressLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressLogsWhereInput
    orderBy?: ProgressLogsOrderByWithAggregationInput | ProgressLogsOrderByWithAggregationInput[]
    by: ProgressLogsScalarFieldEnum[] | ProgressLogsScalarFieldEnum
    having?: ProgressLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressLogsCountAggregateInputType | true
    _avg?: ProgressLogsAvgAggregateInputType
    _sum?: ProgressLogsSumAggregateInputType
    _min?: ProgressLogsMinAggregateInputType
    _max?: ProgressLogsMaxAggregateInputType
  }

  export type ProgressLogsGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.ProgressLogType
    value: number | null
    meta: JsonValue | null
    loggedAt: Date
    workoutId: string | null
    workoutExerciseId: string | null
    _count: ProgressLogsCountAggregateOutputType | null
    _avg: ProgressLogsAvgAggregateOutputType | null
    _sum: ProgressLogsSumAggregateOutputType | null
    _min: ProgressLogsMinAggregateOutputType | null
    _max: ProgressLogsMaxAggregateOutputType | null
  }

  type GetProgressLogsGroupByPayload<T extends ProgressLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressLogsGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressLogsGroupByOutputType[P]>
        }
      >
    >


  export type ProgressLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    meta?: boolean
    loggedAt?: boolean
    workoutId?: boolean
    workoutExerciseId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["progressLogs"]>

  export type ProgressLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    meta?: boolean
    loggedAt?: boolean
    workoutId?: boolean
    workoutExerciseId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["progressLogs"]>

  export type ProgressLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    meta?: boolean
    loggedAt?: boolean
    workoutId?: boolean
    workoutExerciseId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }, ExtArgs["result"]["progressLogs"]>

  export type ProgressLogsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    meta?: boolean
    loggedAt?: boolean
    workoutId?: boolean
    workoutExerciseId?: boolean
  }

  export type ProgressLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "value" | "meta" | "loggedAt" | "workoutId" | "workoutExerciseId", ExtArgs["result"]["progressLogs"]>
  export type ProgressLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }
  export type ProgressLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }
  export type ProgressLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    workout?: boolean | ProgressLogs$workoutArgs<ExtArgs>
    workoutExercise?: boolean | ProgressLogs$workoutExerciseArgs<ExtArgs>
  }

  export type $ProgressLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressLogs"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      workout: Prisma.$WorkoutsPayload<ExtArgs> | null
      workoutExercise: Prisma.$WorkoutExercisesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.ProgressLogType
      value: number | null
      meta: Prisma.JsonValue | null
      loggedAt: Date
      workoutId: string | null
      workoutExerciseId: string | null
    }, ExtArgs["result"]["progressLogs"]>
    composites: {}
  }

  type ProgressLogsGetPayload<S extends boolean | null | undefined | ProgressLogsDefaultArgs> = $Result.GetResult<Prisma.$ProgressLogsPayload, S>

  type ProgressLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressLogsCountAggregateInputType | true
    }

  export interface ProgressLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressLogs'], meta: { name: 'ProgressLogs' } }
    /**
     * Find zero or one ProgressLogs that matches the filter.
     * @param {ProgressLogsFindUniqueArgs} args - Arguments to find a ProgressLogs
     * @example
     * // Get one ProgressLogs
     * const progressLogs = await prisma.progressLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressLogsFindUniqueArgs>(args: SelectSubset<T, ProgressLogsFindUniqueArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressLogsFindUniqueOrThrowArgs} args - Arguments to find a ProgressLogs
     * @example
     * // Get one ProgressLogs
     * const progressLogs = await prisma.progressLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsFindFirstArgs} args - Arguments to find a ProgressLogs
     * @example
     * // Get one ProgressLogs
     * const progressLogs = await prisma.progressLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressLogsFindFirstArgs>(args?: SelectSubset<T, ProgressLogsFindFirstArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsFindFirstOrThrowArgs} args - Arguments to find a ProgressLogs
     * @example
     * // Get one ProgressLogs
     * const progressLogs = await prisma.progressLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressLogs
     * const progressLogs = await prisma.progressLogs.findMany()
     * 
     * // Get first 10 ProgressLogs
     * const progressLogs = await prisma.progressLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressLogsWithIdOnly = await prisma.progressLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressLogsFindManyArgs>(args?: SelectSubset<T, ProgressLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressLogs.
     * @param {ProgressLogsCreateArgs} args - Arguments to create a ProgressLogs.
     * @example
     * // Create one ProgressLogs
     * const ProgressLogs = await prisma.progressLogs.create({
     *   data: {
     *     // ... data to create a ProgressLogs
     *   }
     * })
     * 
     */
    create<T extends ProgressLogsCreateArgs>(args: SelectSubset<T, ProgressLogsCreateArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressLogs.
     * @param {ProgressLogsCreateManyArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLogs = await prisma.progressLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressLogsCreateManyArgs>(args?: SelectSubset<T, ProgressLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressLogs and returns the data saved in the database.
     * @param {ProgressLogsCreateManyAndReturnArgs} args - Arguments to create many ProgressLogs.
     * @example
     * // Create many ProgressLogs
     * const progressLogs = await prisma.progressLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressLogs and only return the `id`
     * const progressLogsWithIdOnly = await prisma.progressLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressLogs.
     * @param {ProgressLogsDeleteArgs} args - Arguments to delete one ProgressLogs.
     * @example
     * // Delete one ProgressLogs
     * const ProgressLogs = await prisma.progressLogs.delete({
     *   where: {
     *     // ... filter to delete one ProgressLogs
     *   }
     * })
     * 
     */
    delete<T extends ProgressLogsDeleteArgs>(args: SelectSubset<T, ProgressLogsDeleteArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressLogs.
     * @param {ProgressLogsUpdateArgs} args - Arguments to update one ProgressLogs.
     * @example
     * // Update one ProgressLogs
     * const progressLogs = await prisma.progressLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressLogsUpdateArgs>(args: SelectSubset<T, ProgressLogsUpdateArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressLogs.
     * @param {ProgressLogsDeleteManyArgs} args - Arguments to filter ProgressLogs to delete.
     * @example
     * // Delete a few ProgressLogs
     * const { count } = await prisma.progressLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressLogsDeleteManyArgs>(args?: SelectSubset<T, ProgressLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressLogs
     * const progressLogs = await prisma.progressLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressLogsUpdateManyArgs>(args: SelectSubset<T, ProgressLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressLogs and returns the data updated in the database.
     * @param {ProgressLogsUpdateManyAndReturnArgs} args - Arguments to update many ProgressLogs.
     * @example
     * // Update many ProgressLogs
     * const progressLogs = await prisma.progressLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressLogs and only return the `id`
     * const progressLogsWithIdOnly = await prisma.progressLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressLogs.
     * @param {ProgressLogsUpsertArgs} args - Arguments to update or create a ProgressLogs.
     * @example
     * // Update or create a ProgressLogs
     * const progressLogs = await prisma.progressLogs.upsert({
     *   create: {
     *     // ... data to create a ProgressLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressLogs we want to update
     *   }
     * })
     */
    upsert<T extends ProgressLogsUpsertArgs>(args: SelectSubset<T, ProgressLogsUpsertArgs<ExtArgs>>): Prisma__ProgressLogsClient<$Result.GetResult<Prisma.$ProgressLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsCountArgs} args - Arguments to filter ProgressLogs to count.
     * @example
     * // Count the number of ProgressLogs
     * const count = await prisma.progressLogs.count({
     *   where: {
     *     // ... the filter for the ProgressLogs we want to count
     *   }
     * })
    **/
    count<T extends ProgressLogsCountArgs>(
      args?: Subset<T, ProgressLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressLogsAggregateArgs>(args: Subset<T, ProgressLogsAggregateArgs>): Prisma.PrismaPromise<GetProgressLogsAggregateType<T>>

    /**
     * Group by ProgressLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressLogsGroupByArgs} args - Group by arguments.
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
      T extends ProgressLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressLogsGroupByArgs['orderBy'] }
        : { orderBy?: ProgressLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressLogs model
   */
  readonly fields: ProgressLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout<T extends ProgressLogs$workoutArgs<ExtArgs> = {}>(args?: Subset<T, ProgressLogs$workoutArgs<ExtArgs>>): Prisma__WorkoutsClient<$Result.GetResult<Prisma.$WorkoutsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workoutExercise<T extends ProgressLogs$workoutExerciseArgs<ExtArgs> = {}>(args?: Subset<T, ProgressLogs$workoutExerciseArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressLogs model
   */
  interface ProgressLogsFieldRefs {
    readonly id: FieldRef<"ProgressLogs", 'String'>
    readonly userId: FieldRef<"ProgressLogs", 'String'>
    readonly type: FieldRef<"ProgressLogs", 'ProgressLogType'>
    readonly value: FieldRef<"ProgressLogs", 'Float'>
    readonly meta: FieldRef<"ProgressLogs", 'Json'>
    readonly loggedAt: FieldRef<"ProgressLogs", 'DateTime'>
    readonly workoutId: FieldRef<"ProgressLogs", 'String'>
    readonly workoutExerciseId: FieldRef<"ProgressLogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgressLogs findUnique
   */
  export type ProgressLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where: ProgressLogsWhereUniqueInput
  }

  /**
   * ProgressLogs findUniqueOrThrow
   */
  export type ProgressLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where: ProgressLogsWhereUniqueInput
  }

  /**
   * ProgressLogs findFirst
   */
  export type ProgressLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * ProgressLogs findFirstOrThrow
   */
  export type ProgressLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressLogs.
     */
    cursor?: ProgressLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * ProgressLogs findMany
   */
  export type ProgressLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter, which ProgressLogs to fetch.
     */
    where?: ProgressLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressLogs to fetch.
     */
    orderBy?: ProgressLogsOrderByWithRelationInput | ProgressLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressLogs.
     */
    cursor?: ProgressLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressLogs.
     */
    distinct?: ProgressLogsScalarFieldEnum | ProgressLogsScalarFieldEnum[]
  }

  /**
   * ProgressLogs create
   */
  export type ProgressLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressLogs.
     */
    data: XOR<ProgressLogsCreateInput, ProgressLogsUncheckedCreateInput>
  }

  /**
   * ProgressLogs createMany
   */
  export type ProgressLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogsCreateManyInput | ProgressLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressLogs createManyAndReturn
   */
  export type ProgressLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressLogs.
     */
    data: ProgressLogsCreateManyInput | ProgressLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLogs update
   */
  export type ProgressLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressLogs.
     */
    data: XOR<ProgressLogsUpdateInput, ProgressLogsUncheckedUpdateInput>
    /**
     * Choose, which ProgressLogs to update.
     */
    where: ProgressLogsWhereUniqueInput
  }

  /**
   * ProgressLogs updateMany
   */
  export type ProgressLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogsUpdateManyMutationInput, ProgressLogsUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogsWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
  }

  /**
   * ProgressLogs updateManyAndReturn
   */
  export type ProgressLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * The data used to update ProgressLogs.
     */
    data: XOR<ProgressLogsUpdateManyMutationInput, ProgressLogsUncheckedUpdateManyInput>
    /**
     * Filter which ProgressLogs to update
     */
    where?: ProgressLogsWhereInput
    /**
     * Limit how many ProgressLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressLogs upsert
   */
  export type ProgressLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressLogs to update in case it exists.
     */
    where: ProgressLogsWhereUniqueInput
    /**
     * In case the ProgressLogs found by the `where` argument doesn't exist, create a new ProgressLogs with this data.
     */
    create: XOR<ProgressLogsCreateInput, ProgressLogsUncheckedCreateInput>
    /**
     * In case the ProgressLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressLogsUpdateInput, ProgressLogsUncheckedUpdateInput>
  }

  /**
   * ProgressLogs delete
   */
  export type ProgressLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
    /**
     * Filter which ProgressLogs to delete.
     */
    where: ProgressLogsWhereUniqueInput
  }

  /**
   * ProgressLogs deleteMany
   */
  export type ProgressLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressLogs to delete
     */
    where?: ProgressLogsWhereInput
    /**
     * Limit how many ProgressLogs to delete.
     */
    limit?: number
  }

  /**
   * ProgressLogs.workout
   */
  export type ProgressLogs$workoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workouts
     */
    select?: WorkoutsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workouts
     */
    omit?: WorkoutsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutsInclude<ExtArgs> | null
    where?: WorkoutsWhereInput
  }

  /**
   * ProgressLogs.workoutExercise
   */
  export type ProgressLogs$workoutExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    where?: WorkoutExercisesWhereInput
  }

  /**
   * ProgressLogs without action
   */
  export type ProgressLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressLogs
     */
    select?: ProgressLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressLogs
     */
    omit?: ProgressLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressLogsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    heightCm: 'heightCm',
    weightKg: 'weightKg',
    goal: 'goal',
    fitnessLevel: 'fitnessLevel',
    selectedCharacterId: 'selectedCharacterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bodyType: 'bodyType',
    difficulty: 'difficulty',
    trainingStyle: 'trainingStyle',
    xpModifier: 'xpModifier',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    unit: 'unit',
    createdAt: 'createdAt'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const WorkoutsScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    dayIndex: 'dayIndex',
    category: 'category',
    title: 'title',
    targetMin: 'targetMin',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type WorkoutsScalarFieldEnum = (typeof WorkoutsScalarFieldEnum)[keyof typeof WorkoutsScalarFieldEnum]


  export const WorkoutExercisesScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    sortOrder: 'sortOrder',
    sets: 'sets',
    repsTarget: 'repsTarget',
    restSec: 'restSec'
  };

  export type WorkoutExercisesScalarFieldEnum = (typeof WorkoutExercisesScalarFieldEnum)[keyof typeof WorkoutExercisesScalarFieldEnum]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    description: 'description',
    criteriaType: 'criteriaType',
    criteriaValue: 'criteriaValue',
    isHidden: 'isHidden',
    createdAt: 'createdAt'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const UserAchievementsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    unlockedAt: 'unlockedAt'
  };

  export type UserAchievementsScalarFieldEnum = (typeof UserAchievementsScalarFieldEnum)[keyof typeof UserAchievementsScalarFieldEnum]


  export const ProgressLogsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    value: 'value',
    meta: 'meta',
    loggedAt: 'loggedAt',
    workoutId: 'workoutId',
    workoutExerciseId: 'workoutExerciseId'
  };

  export type ProgressLogsScalarFieldEnum = (typeof ProgressLogsScalarFieldEnum)[keyof typeof ProgressLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Goal'
   */
  export type EnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal'>
    


  /**
   * Reference to a field of type 'Goal[]'
   */
  export type ListEnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal[]'>
    


  /**
   * Reference to a field of type 'FitnessLevel'
   */
  export type EnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel'>
    


  /**
   * Reference to a field of type 'FitnessLevel[]'
   */
  export type ListEnumFitnessLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FitnessLevel[]'>
    


  /**
   * Reference to a field of type 'CharacterDifficulty'
   */
  export type EnumCharacterDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterDifficulty'>
    


  /**
   * Reference to a field of type 'CharacterDifficulty[]'
   */
  export type ListEnumCharacterDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterDifficulty[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkoutCategory'
   */
  export type EnumWorkoutCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutCategory'>
    


  /**
   * Reference to a field of type 'WorkoutCategory[]'
   */
  export type ListEnumWorkoutCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutCategory[]'>
    


  /**
   * Reference to a field of type 'ProgressLogType'
   */
  export type EnumProgressLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressLogType'>
    


  /**
   * Reference to a field of type 'ProgressLogType[]'
   */
  export type ListEnumProgressLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressLogType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Profiles?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    ProgressLogs?: ProgressLogsListRelationFilter
    UserAchievements?: UserAchievementsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Profiles?: ProfilesOrderByWithRelationInput
    ProgressLogs?: ProgressLogsOrderByRelationAggregateInput
    UserAchievements?: UserAchievementsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Profiles?: XOR<ProfilesNullableScalarRelationFilter, ProfilesWhereInput> | null
    ProgressLogs?: ProgressLogsListRelationFilter
    UserAchievements?: UserAchievementsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    id?: StringFilter<"Profiles"> | string
    userId?: StringFilter<"Profiles"> | string
    heightCm?: IntFilter<"Profiles"> | number
    weightKg?: FloatFilter<"Profiles"> | number
    goal?: EnumGoalFilter<"Profiles"> | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFilter<"Profiles"> | $Enums.FitnessLevel
    selectedCharacterId?: StringNullableFilter<"Profiles"> | string | null
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    selectedCharacter?: XOR<CharactersNullableScalarRelationFilter, CharactersWhereInput> | null
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    goal?: SortOrder
    fitnessLevel?: SortOrder
    selectedCharacterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    selectedCharacter?: CharactersOrderByWithRelationInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    heightCm?: IntFilter<"Profiles"> | number
    weightKg?: FloatFilter<"Profiles"> | number
    goal?: EnumGoalFilter<"Profiles"> | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFilter<"Profiles"> | $Enums.FitnessLevel
    selectedCharacterId?: StringNullableFilter<"Profiles"> | string | null
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeFilter<"Profiles"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    selectedCharacter?: XOR<CharactersNullableScalarRelationFilter, CharactersWhereInput> | null
  }, "id" | "userId">

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    goal?: SortOrder
    fitnessLevel?: SortOrder
    selectedCharacterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _avg?: ProfilesAvgOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
    _sum?: ProfilesSumOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profiles"> | string
    userId?: StringWithAggregatesFilter<"Profiles"> | string
    heightCm?: IntWithAggregatesFilter<"Profiles"> | number
    weightKg?: FloatWithAggregatesFilter<"Profiles"> | number
    goal?: EnumGoalWithAggregatesFilter<"Profiles"> | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelWithAggregatesFilter<"Profiles"> | $Enums.FitnessLevel
    selectedCharacterId?: StringNullableWithAggregatesFilter<"Profiles"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    id?: StringFilter<"Characters"> | string
    name?: StringFilter<"Characters"> | string
    bodyType?: StringFilter<"Characters"> | string
    difficulty?: EnumCharacterDifficultyFilter<"Characters"> | $Enums.CharacterDifficulty
    trainingStyle?: StringFilter<"Characters"> | string
    xpModifier?: FloatFilter<"Characters"> | number
    isActive?: BoolFilter<"Characters"> | boolean
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    Workouts?: WorkoutsListRelationFilter
    profiles?: ProfilesListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bodyType?: SortOrder
    difficulty?: SortOrder
    trainingStyle?: SortOrder
    xpModifier?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Workouts?: WorkoutsOrderByRelationAggregateInput
    profiles?: ProfilesOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    bodyType?: StringFilter<"Characters"> | string
    difficulty?: EnumCharacterDifficultyFilter<"Characters"> | $Enums.CharacterDifficulty
    trainingStyle?: StringFilter<"Characters"> | string
    xpModifier?: FloatFilter<"Characters"> | number
    isActive?: BoolFilter<"Characters"> | boolean
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    Workouts?: WorkoutsListRelationFilter
    profiles?: ProfilesListRelationFilter
  }, "id" | "name">

  export type CharactersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bodyType?: SortOrder
    difficulty?: SortOrder
    trainingStyle?: SortOrder
    xpModifier?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Characters"> | string
    name?: StringWithAggregatesFilter<"Characters"> | string
    bodyType?: StringWithAggregatesFilter<"Characters"> | string
    difficulty?: EnumCharacterDifficultyWithAggregatesFilter<"Characters"> | $Enums.CharacterDifficulty
    trainingStyle?: StringWithAggregatesFilter<"Characters"> | string
    xpModifier?: FloatWithAggregatesFilter<"Characters"> | number
    isActive?: BoolWithAggregatesFilter<"Characters"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
  }

  export type ExercisesWhereInput = {
    AND?: ExercisesWhereInput | ExercisesWhereInput[]
    OR?: ExercisesWhereInput[]
    NOT?: ExercisesWhereInput | ExercisesWhereInput[]
    id?: StringFilter<"Exercises"> | string
    name?: StringFilter<"Exercises"> | string
    category?: EnumWorkoutCategoryFilter<"Exercises"> | $Enums.WorkoutCategory
    unit?: StringNullableFilter<"Exercises"> | string | null
    createdAt?: DateTimeFilter<"Exercises"> | Date | string
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }

  export type ExercisesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    WorkoutExercises?: WorkoutExercisesOrderByRelationAggregateInput
  }

  export type ExercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExercisesWhereInput | ExercisesWhereInput[]
    OR?: ExercisesWhereInput[]
    NOT?: ExercisesWhereInput | ExercisesWhereInput[]
    name?: StringFilter<"Exercises"> | string
    category?: EnumWorkoutCategoryFilter<"Exercises"> | $Enums.WorkoutCategory
    unit?: StringNullableFilter<"Exercises"> | string | null
    createdAt?: DateTimeFilter<"Exercises"> | Date | string
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }, "id">

  export type ExercisesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExercisesCountOrderByAggregateInput
    _max?: ExercisesMaxOrderByAggregateInput
    _min?: ExercisesMinOrderByAggregateInput
  }

  export type ExercisesScalarWhereWithAggregatesInput = {
    AND?: ExercisesScalarWhereWithAggregatesInput | ExercisesScalarWhereWithAggregatesInput[]
    OR?: ExercisesScalarWhereWithAggregatesInput[]
    NOT?: ExercisesScalarWhereWithAggregatesInput | ExercisesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercises"> | string
    name?: StringWithAggregatesFilter<"Exercises"> | string
    category?: EnumWorkoutCategoryWithAggregatesFilter<"Exercises"> | $Enums.WorkoutCategory
    unit?: StringNullableWithAggregatesFilter<"Exercises"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercises"> | Date | string
  }

  export type WorkoutsWhereInput = {
    AND?: WorkoutsWhereInput | WorkoutsWhereInput[]
    OR?: WorkoutsWhereInput[]
    NOT?: WorkoutsWhereInput | WorkoutsWhereInput[]
    id?: StringFilter<"Workouts"> | string
    characterId?: StringFilter<"Workouts"> | string
    dayIndex?: IntFilter<"Workouts"> | number
    category?: EnumWorkoutCategoryFilter<"Workouts"> | $Enums.WorkoutCategory
    title?: StringFilter<"Workouts"> | string
    targetMin?: IntNullableFilter<"Workouts"> | number | null
    isActive?: BoolFilter<"Workouts"> | boolean
    createdAt?: DateTimeFilter<"Workouts"> | Date | string
    character?: XOR<CharactersScalarRelationFilter, CharactersWhereInput>
    WorkoutExercises?: WorkoutExercisesListRelationFilter
    ProgressLogs?: ProgressLogsListRelationFilter
  }

  export type WorkoutsOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    dayIndex?: SortOrder
    category?: SortOrder
    title?: SortOrder
    targetMin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    character?: CharactersOrderByWithRelationInput
    WorkoutExercises?: WorkoutExercisesOrderByRelationAggregateInput
    ProgressLogs?: ProgressLogsOrderByRelationAggregateInput
  }

  export type WorkoutsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutsWhereInput | WorkoutsWhereInput[]
    OR?: WorkoutsWhereInput[]
    NOT?: WorkoutsWhereInput | WorkoutsWhereInput[]
    characterId?: StringFilter<"Workouts"> | string
    dayIndex?: IntFilter<"Workouts"> | number
    category?: EnumWorkoutCategoryFilter<"Workouts"> | $Enums.WorkoutCategory
    title?: StringFilter<"Workouts"> | string
    targetMin?: IntNullableFilter<"Workouts"> | number | null
    isActive?: BoolFilter<"Workouts"> | boolean
    createdAt?: DateTimeFilter<"Workouts"> | Date | string
    character?: XOR<CharactersScalarRelationFilter, CharactersWhereInput>
    WorkoutExercises?: WorkoutExercisesListRelationFilter
    ProgressLogs?: ProgressLogsListRelationFilter
  }, "id">

  export type WorkoutsOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    dayIndex?: SortOrder
    category?: SortOrder
    title?: SortOrder
    targetMin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutsCountOrderByAggregateInput
    _avg?: WorkoutsAvgOrderByAggregateInput
    _max?: WorkoutsMaxOrderByAggregateInput
    _min?: WorkoutsMinOrderByAggregateInput
    _sum?: WorkoutsSumOrderByAggregateInput
  }

  export type WorkoutsScalarWhereWithAggregatesInput = {
    AND?: WorkoutsScalarWhereWithAggregatesInput | WorkoutsScalarWhereWithAggregatesInput[]
    OR?: WorkoutsScalarWhereWithAggregatesInput[]
    NOT?: WorkoutsScalarWhereWithAggregatesInput | WorkoutsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workouts"> | string
    characterId?: StringWithAggregatesFilter<"Workouts"> | string
    dayIndex?: IntWithAggregatesFilter<"Workouts"> | number
    category?: EnumWorkoutCategoryWithAggregatesFilter<"Workouts"> | $Enums.WorkoutCategory
    title?: StringWithAggregatesFilter<"Workouts"> | string
    targetMin?: IntNullableWithAggregatesFilter<"Workouts"> | number | null
    isActive?: BoolWithAggregatesFilter<"Workouts"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workouts"> | Date | string
  }

  export type WorkoutExercisesWhereInput = {
    AND?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    OR?: WorkoutExercisesWhereInput[]
    NOT?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    id?: StringFilter<"WorkoutExercises"> | string
    workoutId?: StringFilter<"WorkoutExercises"> | string
    exerciseId?: StringFilter<"WorkoutExercises"> | string
    sortOrder?: IntFilter<"WorkoutExercises"> | number
    sets?: IntFilter<"WorkoutExercises"> | number
    repsTarget?: IntFilter<"WorkoutExercises"> | number
    restSec?: IntFilter<"WorkoutExercises"> | number
    workout?: XOR<WorkoutsScalarRelationFilter, WorkoutsWhereInput>
    exercise?: XOR<ExercisesScalarRelationFilter, ExercisesWhereInput>
    completedSetLogs?: ProgressLogsListRelationFilter
  }

  export type WorkoutExercisesOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
    workout?: WorkoutsOrderByWithRelationInput
    exercise?: ExercisesOrderByWithRelationInput
    completedSetLogs?: ProgressLogsOrderByRelationAggregateInput
  }

  export type WorkoutExercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workoutId_exerciseId?: WorkoutExercisesWorkoutIdExerciseIdCompoundUniqueInput
    AND?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    OR?: WorkoutExercisesWhereInput[]
    NOT?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    workoutId?: StringFilter<"WorkoutExercises"> | string
    exerciseId?: StringFilter<"WorkoutExercises"> | string
    sortOrder?: IntFilter<"WorkoutExercises"> | number
    sets?: IntFilter<"WorkoutExercises"> | number
    repsTarget?: IntFilter<"WorkoutExercises"> | number
    restSec?: IntFilter<"WorkoutExercises"> | number
    workout?: XOR<WorkoutsScalarRelationFilter, WorkoutsWhereInput>
    exercise?: XOR<ExercisesScalarRelationFilter, ExercisesWhereInput>
    completedSetLogs?: ProgressLogsListRelationFilter
  }, "id" | "workoutId_exerciseId">

  export type WorkoutExercisesOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
    _count?: WorkoutExercisesCountOrderByAggregateInput
    _avg?: WorkoutExercisesAvgOrderByAggregateInput
    _max?: WorkoutExercisesMaxOrderByAggregateInput
    _min?: WorkoutExercisesMinOrderByAggregateInput
    _sum?: WorkoutExercisesSumOrderByAggregateInput
  }

  export type WorkoutExercisesScalarWhereWithAggregatesInput = {
    AND?: WorkoutExercisesScalarWhereWithAggregatesInput | WorkoutExercisesScalarWhereWithAggregatesInput[]
    OR?: WorkoutExercisesScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExercisesScalarWhereWithAggregatesInput | WorkoutExercisesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutExercises"> | string
    workoutId?: StringWithAggregatesFilter<"WorkoutExercises"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutExercises"> | string
    sortOrder?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    sets?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    repsTarget?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    restSec?: IntWithAggregatesFilter<"WorkoutExercises"> | number
  }

  export type AchievementsWhereInput = {
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    id?: StringFilter<"Achievements"> | string
    key?: StringFilter<"Achievements"> | string
    name?: StringFilter<"Achievements"> | string
    description?: StringFilter<"Achievements"> | string
    criteriaType?: StringFilter<"Achievements"> | string
    criteriaValue?: IntFilter<"Achievements"> | number
    isHidden?: BoolFilter<"Achievements"> | boolean
    createdAt?: DateTimeFilter<"Achievements"> | Date | string
    userAchievements?: UserAchievementsListRelationFilter
  }

  export type AchievementsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteriaType?: SortOrder
    criteriaValue?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    userAchievements?: UserAchievementsOrderByRelationAggregateInput
  }

  export type AchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    name?: StringFilter<"Achievements"> | string
    description?: StringFilter<"Achievements"> | string
    criteriaType?: StringFilter<"Achievements"> | string
    criteriaValue?: IntFilter<"Achievements"> | number
    isHidden?: BoolFilter<"Achievements"> | boolean
    createdAt?: DateTimeFilter<"Achievements"> | Date | string
    userAchievements?: UserAchievementsListRelationFilter
  }, "id" | "key">

  export type AchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteriaType?: SortOrder
    criteriaValue?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    _count?: AchievementsCountOrderByAggregateInput
    _avg?: AchievementsAvgOrderByAggregateInput
    _max?: AchievementsMaxOrderByAggregateInput
    _min?: AchievementsMinOrderByAggregateInput
    _sum?: AchievementsSumOrderByAggregateInput
  }

  export type AchievementsScalarWhereWithAggregatesInput = {
    AND?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    OR?: AchievementsScalarWhereWithAggregatesInput[]
    NOT?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievements"> | string
    key?: StringWithAggregatesFilter<"Achievements"> | string
    name?: StringWithAggregatesFilter<"Achievements"> | string
    description?: StringWithAggregatesFilter<"Achievements"> | string
    criteriaType?: StringWithAggregatesFilter<"Achievements"> | string
    criteriaValue?: IntWithAggregatesFilter<"Achievements"> | number
    isHidden?: BoolWithAggregatesFilter<"Achievements"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Achievements"> | Date | string
  }

  export type UserAchievementsWhereInput = {
    AND?: UserAchievementsWhereInput | UserAchievementsWhereInput[]
    OR?: UserAchievementsWhereInput[]
    NOT?: UserAchievementsWhereInput | UserAchievementsWhereInput[]
    id?: StringFilter<"UserAchievements"> | string
    userId?: StringFilter<"UserAchievements"> | string
    achievementId?: StringFilter<"UserAchievements"> | string
    unlockedAt?: DateTimeFilter<"UserAchievements"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    achievement?: XOR<AchievementsScalarRelationFilter, AchievementsWhereInput>
  }

  export type UserAchievementsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    achievement?: AchievementsOrderByWithRelationInput
  }

  export type UserAchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievementId?: UserAchievementsUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementsWhereInput | UserAchievementsWhereInput[]
    OR?: UserAchievementsWhereInput[]
    NOT?: UserAchievementsWhereInput | UserAchievementsWhereInput[]
    userId?: StringFilter<"UserAchievements"> | string
    achievementId?: StringFilter<"UserAchievements"> | string
    unlockedAt?: DateTimeFilter<"UserAchievements"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    achievement?: XOR<AchievementsScalarRelationFilter, AchievementsWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
    _count?: UserAchievementsCountOrderByAggregateInput
    _max?: UserAchievementsMaxOrderByAggregateInput
    _min?: UserAchievementsMinOrderByAggregateInput
  }

  export type UserAchievementsScalarWhereWithAggregatesInput = {
    AND?: UserAchievementsScalarWhereWithAggregatesInput | UserAchievementsScalarWhereWithAggregatesInput[]
    OR?: UserAchievementsScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementsScalarWhereWithAggregatesInput | UserAchievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievements"> | string
    userId?: StringWithAggregatesFilter<"UserAchievements"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievements"> | string
    unlockedAt?: DateTimeWithAggregatesFilter<"UserAchievements"> | Date | string
  }

  export type ProgressLogsWhereInput = {
    AND?: ProgressLogsWhereInput | ProgressLogsWhereInput[]
    OR?: ProgressLogsWhereInput[]
    NOT?: ProgressLogsWhereInput | ProgressLogsWhereInput[]
    id?: StringFilter<"ProgressLogs"> | string
    userId?: StringFilter<"ProgressLogs"> | string
    type?: EnumProgressLogTypeFilter<"ProgressLogs"> | $Enums.ProgressLogType
    value?: FloatNullableFilter<"ProgressLogs"> | number | null
    meta?: JsonNullableFilter<"ProgressLogs">
    loggedAt?: DateTimeFilter<"ProgressLogs"> | Date | string
    workoutId?: StringNullableFilter<"ProgressLogs"> | string | null
    workoutExerciseId?: StringNullableFilter<"ProgressLogs"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    workout?: XOR<WorkoutsNullableScalarRelationFilter, WorkoutsWhereInput> | null
    workoutExercise?: XOR<WorkoutExercisesNullableScalarRelationFilter, WorkoutExercisesWhereInput> | null
  }

  export type ProgressLogsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    workoutId?: SortOrderInput | SortOrder
    workoutExerciseId?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    workout?: WorkoutsOrderByWithRelationInput
    workoutExercise?: WorkoutExercisesOrderByWithRelationInput
  }

  export type ProgressLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressLogsWhereInput | ProgressLogsWhereInput[]
    OR?: ProgressLogsWhereInput[]
    NOT?: ProgressLogsWhereInput | ProgressLogsWhereInput[]
    userId?: StringFilter<"ProgressLogs"> | string
    type?: EnumProgressLogTypeFilter<"ProgressLogs"> | $Enums.ProgressLogType
    value?: FloatNullableFilter<"ProgressLogs"> | number | null
    meta?: JsonNullableFilter<"ProgressLogs">
    loggedAt?: DateTimeFilter<"ProgressLogs"> | Date | string
    workoutId?: StringNullableFilter<"ProgressLogs"> | string | null
    workoutExerciseId?: StringNullableFilter<"ProgressLogs"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    workout?: XOR<WorkoutsNullableScalarRelationFilter, WorkoutsWhereInput> | null
    workoutExercise?: XOR<WorkoutExercisesNullableScalarRelationFilter, WorkoutExercisesWhereInput> | null
  }, "id">

  export type ProgressLogsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    workoutId?: SortOrderInput | SortOrder
    workoutExerciseId?: SortOrderInput | SortOrder
    _count?: ProgressLogsCountOrderByAggregateInput
    _avg?: ProgressLogsAvgOrderByAggregateInput
    _max?: ProgressLogsMaxOrderByAggregateInput
    _min?: ProgressLogsMinOrderByAggregateInput
    _sum?: ProgressLogsSumOrderByAggregateInput
  }

  export type ProgressLogsScalarWhereWithAggregatesInput = {
    AND?: ProgressLogsScalarWhereWithAggregatesInput | ProgressLogsScalarWhereWithAggregatesInput[]
    OR?: ProgressLogsScalarWhereWithAggregatesInput[]
    NOT?: ProgressLogsScalarWhereWithAggregatesInput | ProgressLogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressLogs"> | string
    userId?: StringWithAggregatesFilter<"ProgressLogs"> | string
    type?: EnumProgressLogTypeWithAggregatesFilter<"ProgressLogs"> | $Enums.ProgressLogType
    value?: FloatNullableWithAggregatesFilter<"ProgressLogs"> | number | null
    meta?: JsonNullableWithAggregatesFilter<"ProgressLogs">
    loggedAt?: DateTimeWithAggregatesFilter<"ProgressLogs"> | Date | string
    workoutId?: StringNullableWithAggregatesFilter<"ProgressLogs"> | string | null
    workoutExerciseId?: StringNullableWithAggregatesFilter<"ProgressLogs"> | string | null
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesCreateNestedOneWithoutUserInput
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutUserInput
    UserAchievements?: UserAchievementsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutUserInput
    UserAchievements?: UserAchievementsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUpdateOneWithoutUserNestedInput
    ProgressLogs?: ProgressLogsUpdateManyWithoutUserNestedInput
    UserAchievements?: UserAchievementsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutUserNestedInput
    UserAchievements?: UserAchievementsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesCreateInput = {
    id?: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProfilesInput
    selectedCharacter?: CharactersCreateNestedOneWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateInput = {
    id?: string
    userId: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    selectedCharacterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProfilesNestedInput
    selectedCharacter?: CharactersUpdateOneWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    selectedCharacterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesCreateManyInput = {
    id?: string
    userId: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    selectedCharacterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    selectedCharacterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Workouts?: WorkoutsCreateNestedManyWithoutCharacterInput
    profiles?: ProfilesCreateNestedManyWithoutSelectedCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Workouts?: WorkoutsUncheckedCreateNestedManyWithoutCharacterInput
    profiles?: ProfilesUncheckedCreateNestedManyWithoutSelectedCharacterInput
  }

  export type CharactersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workouts?: WorkoutsUpdateManyWithoutCharacterNestedInput
    profiles?: ProfilesUpdateManyWithoutSelectedCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workouts?: WorkoutsUncheckedUpdateManyWithoutCharacterNestedInput
    profiles?: ProfilesUncheckedUpdateManyWithoutSelectedCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercisesCreateInput = {
    id?: string
    name: string
    category: $Enums.WorkoutCategory
    unit?: string | null
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutExerciseInput
  }

  export type ExercisesUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.WorkoutCategory
    unit?: string | null
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExercisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutExerciseNestedInput
  }

  export type ExercisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExercisesCreateManyInput = {
    id?: string
    name: string
    category: $Enums.WorkoutCategory
    unit?: string | null
    createdAt?: Date | string
  }

  export type ExercisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutsCreateInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    character: CharactersCreateNestedOneWithoutWorkoutsInput
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutWorkoutInput
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsUncheckedCreateInput = {
    id?: string
    characterId: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharactersUpdateOneRequiredWithoutWorkoutsNestedInput
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutWorkoutNestedInput
    ProgressLogs?: ProgressLogsUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsCreateManyInput = {
    id?: string
    characterId: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WorkoutsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateInput = {
    id?: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    workout: WorkoutsCreateNestedOneWithoutWorkoutExercisesInput
    exercise: ExercisesCreateNestedOneWithoutWorkoutExercisesInput
    completedSetLogs?: ProgressLogsCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesUncheckedCreateInput = {
    id?: string
    workoutId: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    completedSetLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    workout?: WorkoutsUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    exercise?: ExercisesUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    completedSetLogs?: ProgressLogsUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    completedSetLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesCreateManyInput = {
    id?: string
    workoutId: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
  }

  export type WorkoutExercisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementsCreateInput = {
    id?: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden?: boolean
    createdAt?: Date | string
    userAchievements?: UserAchievementsCreateNestedManyWithoutAchievementInput
  }

  export type AchievementsUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden?: boolean
    createdAt?: Date | string
    userAchievements?: UserAchievementsUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementsUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementsUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementsCreateManyInput = {
    id?: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden?: boolean
    createdAt?: Date | string
  }

  export type AchievementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementsCreateInput = {
    id?: string
    unlockedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserAchievementsInput
    achievement: AchievementsCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementsUncheckedCreateInput = {
    id?: string
    userId: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserAchievementsNestedInput
    achievement?: AchievementsUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementsCreateManyInput = {
    id?: string
    userId: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogsCreateInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    user: UsersCreateNestedOneWithoutProgressLogsInput
    workout?: WorkoutsCreateNestedOneWithoutProgressLogsInput
    workoutExercise?: WorkoutExercisesCreateNestedOneWithoutCompletedSetLogsInput
  }

  export type ProgressLogsUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
    workoutExerciseId?: string | null
  }

  export type ProgressLogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProgressLogsNestedInput
    workout?: WorkoutsUpdateOneWithoutProgressLogsNestedInput
    workoutExercise?: WorkoutExercisesUpdateOneWithoutCompletedSetLogsNestedInput
  }

  export type ProgressLogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogsCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
    workoutExerciseId?: string | null
  }

  export type ProgressLogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type ProfilesNullableScalarRelationFilter = {
    is?: ProfilesWhereInput | null
    isNot?: ProfilesWhereInput | null
  }

  export type ProgressLogsListRelationFilter = {
    every?: ProgressLogsWhereInput
    some?: ProgressLogsWhereInput
    none?: ProgressLogsWhereInput
  }

  export type UserAchievementsListRelationFilter = {
    every?: UserAchievementsWhereInput
    some?: UserAchievementsWhereInput
    none?: UserAchievementsWhereInput
  }

  export type ProgressLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalFilter<$PrismaModel> | $Enums.Goal
  }

  export type EnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CharactersNullableScalarRelationFilter = {
    is?: CharactersWhereInput | null
    isNot?: CharactersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    goal?: SortOrder
    fitnessLevel?: SortOrder
    selectedCharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilesAvgOrderByAggregateInput = {
    heightCm?: SortOrder
    weightKg?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    goal?: SortOrder
    fitnessLevel?: SortOrder
    selectedCharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    goal?: SortOrder
    fitnessLevel?: SortOrder
    selectedCharacterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilesSumOrderByAggregateInput = {
    heightCm?: SortOrder
    weightKg?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalWithAggregatesFilter<$PrismaModel> | $Enums.Goal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalFilter<$PrismaModel>
    _max?: NestedEnumGoalFilter<$PrismaModel>
  }

  export type EnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCharacterDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterDifficulty | EnumCharacterDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterDifficultyFilter<$PrismaModel> | $Enums.CharacterDifficulty
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkoutsListRelationFilter = {
    every?: WorkoutsWhereInput
    some?: WorkoutsWhereInput
    none?: WorkoutsWhereInput
  }

  export type ProfilesListRelationFilter = {
    every?: ProfilesWhereInput
    some?: ProfilesWhereInput
    none?: ProfilesWhereInput
  }

  export type WorkoutsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bodyType?: SortOrder
    difficulty?: SortOrder
    trainingStyle?: SortOrder
    xpModifier?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    xpModifier?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bodyType?: SortOrder
    difficulty?: SortOrder
    trainingStyle?: SortOrder
    xpModifier?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bodyType?: SortOrder
    difficulty?: SortOrder
    trainingStyle?: SortOrder
    xpModifier?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    xpModifier?: SortOrder
  }

  export type EnumCharacterDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterDifficulty | EnumCharacterDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.CharacterDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterDifficultyFilter<$PrismaModel>
    _max?: NestedEnumCharacterDifficultyFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWorkoutCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutCategory | EnumWorkoutCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutCategoryFilter<$PrismaModel> | $Enums.WorkoutCategory
  }

  export type WorkoutExercisesListRelationFilter = {
    every?: WorkoutExercisesWhereInput
    some?: WorkoutExercisesWhereInput
    none?: WorkoutExercisesWhereInput
  }

  export type WorkoutExercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExercisesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
  }

  export type ExercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
  }

  export type ExercisesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWorkoutCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutCategory | EnumWorkoutCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutCategoryFilter<$PrismaModel>
    _max?: NestedEnumWorkoutCategoryFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CharactersScalarRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type WorkoutsCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    dayIndex?: SortOrder
    category?: SortOrder
    title?: SortOrder
    targetMin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutsAvgOrderByAggregateInput = {
    dayIndex?: SortOrder
    targetMin?: SortOrder
  }

  export type WorkoutsMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    dayIndex?: SortOrder
    category?: SortOrder
    title?: SortOrder
    targetMin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutsMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    dayIndex?: SortOrder
    category?: SortOrder
    title?: SortOrder
    targetMin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutsSumOrderByAggregateInput = {
    dayIndex?: SortOrder
    targetMin?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WorkoutsScalarRelationFilter = {
    is?: WorkoutsWhereInput
    isNot?: WorkoutsWhereInput
  }

  export type ExercisesScalarRelationFilter = {
    is?: ExercisesWhereInput
    isNot?: ExercisesWhereInput
  }

  export type WorkoutExercisesWorkoutIdExerciseIdCompoundUniqueInput = {
    workoutId: string
    exerciseId: string
  }

  export type WorkoutExercisesCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
  }

  export type WorkoutExercisesAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
  }

  export type WorkoutExercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
  }

  export type WorkoutExercisesMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
  }

  export type WorkoutExercisesSumOrderByAggregateInput = {
    sortOrder?: SortOrder
    sets?: SortOrder
    repsTarget?: SortOrder
    restSec?: SortOrder
  }

  export type AchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteriaType?: SortOrder
    criteriaValue?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementsAvgOrderByAggregateInput = {
    criteriaValue?: SortOrder
  }

  export type AchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteriaType?: SortOrder
    criteriaValue?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    criteriaType?: SortOrder
    criteriaValue?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementsSumOrderByAggregateInput = {
    criteriaValue?: SortOrder
  }

  export type AchievementsScalarRelationFilter = {
    is?: AchievementsWhereInput
    isNot?: AchievementsWhereInput
  }

  export type UserAchievementsUserIdAchievementIdCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type UserAchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type EnumProgressLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressLogType | EnumProgressLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressLogTypeFilter<$PrismaModel> | $Enums.ProgressLogType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkoutsNullableScalarRelationFilter = {
    is?: WorkoutsWhereInput | null
    isNot?: WorkoutsWhereInput | null
  }

  export type WorkoutExercisesNullableScalarRelationFilter = {
    is?: WorkoutExercisesWhereInput | null
    isNot?: WorkoutExercisesWhereInput | null
  }

  export type ProgressLogsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    meta?: SortOrder
    loggedAt?: SortOrder
    workoutId?: SortOrder
    workoutExerciseId?: SortOrder
  }

  export type ProgressLogsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ProgressLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    workoutId?: SortOrder
    workoutExerciseId?: SortOrder
  }

  export type ProgressLogsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    workoutId?: SortOrder
    workoutExerciseId?: SortOrder
  }

  export type ProgressLogsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumProgressLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressLogType | EnumProgressLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProgressLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressLogTypeFilter<$PrismaModel>
    _max?: NestedEnumProgressLogTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProfilesCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type ProgressLogsCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput> | ProgressLogsCreateWithoutUserInput[] | ProgressLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutUserInput | ProgressLogsCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogsCreateManyUserInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type UserAchievementsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput> | UserAchievementsCreateWithoutUserInput[] | UserAchievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutUserInput | UserAchievementsCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementsCreateManyUserInputEnvelope
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
  }

  export type ProfilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    connect?: ProfilesWhereUniqueInput
  }

  export type ProgressLogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput> | ProgressLogsCreateWithoutUserInput[] | ProgressLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutUserInput | ProgressLogsCreateOrConnectWithoutUserInput[]
    createMany?: ProgressLogsCreateManyUserInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type UserAchievementsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput> | UserAchievementsCreateWithoutUserInput[] | UserAchievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutUserInput | UserAchievementsCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementsCreateManyUserInputEnvelope
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProgressLogsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput> | ProgressLogsCreateWithoutUserInput[] | ProgressLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutUserInput | ProgressLogsCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutUserInput | ProgressLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogsCreateManyUserInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutUserInput | ProgressLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutUserInput | ProgressLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type UserAchievementsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput> | UserAchievementsCreateWithoutUserInput[] | UserAchievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutUserInput | UserAchievementsCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementsUpsertWithWhereUniqueWithoutUserInput | UserAchievementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementsCreateManyUserInputEnvelope
    set?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    disconnect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    delete?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    update?: UserAchievementsUpdateWithWhereUniqueWithoutUserInput | UserAchievementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementsUpdateManyWithWhereWithoutUserInput | UserAchievementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
  }

  export type ProfilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput
    upsert?: ProfilesUpsertWithoutUserInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutUserInput, ProfilesUpdateWithoutUserInput>, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProgressLogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput> | ProgressLogsCreateWithoutUserInput[] | ProgressLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutUserInput | ProgressLogsCreateOrConnectWithoutUserInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutUserInput | ProgressLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressLogsCreateManyUserInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutUserInput | ProgressLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutUserInput | ProgressLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type UserAchievementsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput> | UserAchievementsCreateWithoutUserInput[] | UserAchievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutUserInput | UserAchievementsCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementsUpsertWithWhereUniqueWithoutUserInput | UserAchievementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementsCreateManyUserInputEnvelope
    set?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    disconnect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    delete?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    update?: UserAchievementsUpdateWithWhereUniqueWithoutUserInput | UserAchievementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementsUpdateManyWithWhereWithoutUserInput | UserAchievementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    connect?: UsersWhereUniqueInput
  }

  export type CharactersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<CharactersCreateWithoutProfilesInput, CharactersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutProfilesInput
    connect?: CharactersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGoalFieldUpdateOperationsInput = {
    set?: $Enums.Goal
  }

  export type EnumFitnessLevelFieldUpdateOperationsInput = {
    set?: $Enums.FitnessLevel
  }

  export type UsersUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    upsert?: UsersUpsertWithoutProfilesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutProfilesInput, UsersUpdateWithoutProfilesInput>, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type CharactersUpdateOneWithoutProfilesNestedInput = {
    create?: XOR<CharactersCreateWithoutProfilesInput, CharactersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutProfilesInput
    upsert?: CharactersUpsertWithoutProfilesInput
    disconnect?: CharactersWhereInput | boolean
    delete?: CharactersWhereInput | boolean
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutProfilesInput, CharactersUpdateWithoutProfilesInput>, CharactersUncheckedUpdateWithoutProfilesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkoutsCreateNestedManyWithoutCharacterInput = {
    create?: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput> | WorkoutsCreateWithoutCharacterInput[] | WorkoutsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: WorkoutsCreateOrConnectWithoutCharacterInput | WorkoutsCreateOrConnectWithoutCharacterInput[]
    createMany?: WorkoutsCreateManyCharacterInputEnvelope
    connect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
  }

  export type ProfilesCreateNestedManyWithoutSelectedCharacterInput = {
    create?: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput> | ProfilesCreateWithoutSelectedCharacterInput[] | ProfilesUncheckedCreateWithoutSelectedCharacterInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutSelectedCharacterInput | ProfilesCreateOrConnectWithoutSelectedCharacterInput[]
    createMany?: ProfilesCreateManySelectedCharacterInputEnvelope
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
  }

  export type WorkoutsUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput> | WorkoutsCreateWithoutCharacterInput[] | WorkoutsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: WorkoutsCreateOrConnectWithoutCharacterInput | WorkoutsCreateOrConnectWithoutCharacterInput[]
    createMany?: WorkoutsCreateManyCharacterInputEnvelope
    connect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
  }

  export type ProfilesUncheckedCreateNestedManyWithoutSelectedCharacterInput = {
    create?: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput> | ProfilesCreateWithoutSelectedCharacterInput[] | ProfilesUncheckedCreateWithoutSelectedCharacterInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutSelectedCharacterInput | ProfilesCreateOrConnectWithoutSelectedCharacterInput[]
    createMany?: ProfilesCreateManySelectedCharacterInputEnvelope
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
  }

  export type EnumCharacterDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.CharacterDifficulty
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkoutsUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput> | WorkoutsCreateWithoutCharacterInput[] | WorkoutsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: WorkoutsCreateOrConnectWithoutCharacterInput | WorkoutsCreateOrConnectWithoutCharacterInput[]
    upsert?: WorkoutsUpsertWithWhereUniqueWithoutCharacterInput | WorkoutsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: WorkoutsCreateManyCharacterInputEnvelope
    set?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    disconnect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    delete?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    connect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    update?: WorkoutsUpdateWithWhereUniqueWithoutCharacterInput | WorkoutsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: WorkoutsUpdateManyWithWhereWithoutCharacterInput | WorkoutsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: WorkoutsScalarWhereInput | WorkoutsScalarWhereInput[]
  }

  export type ProfilesUpdateManyWithoutSelectedCharacterNestedInput = {
    create?: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput> | ProfilesCreateWithoutSelectedCharacterInput[] | ProfilesUncheckedCreateWithoutSelectedCharacterInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutSelectedCharacterInput | ProfilesCreateOrConnectWithoutSelectedCharacterInput[]
    upsert?: ProfilesUpsertWithWhereUniqueWithoutSelectedCharacterInput | ProfilesUpsertWithWhereUniqueWithoutSelectedCharacterInput[]
    createMany?: ProfilesCreateManySelectedCharacterInputEnvelope
    set?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    disconnect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    delete?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    update?: ProfilesUpdateWithWhereUniqueWithoutSelectedCharacterInput | ProfilesUpdateWithWhereUniqueWithoutSelectedCharacterInput[]
    updateMany?: ProfilesUpdateManyWithWhereWithoutSelectedCharacterInput | ProfilesUpdateManyWithWhereWithoutSelectedCharacterInput[]
    deleteMany?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
  }

  export type WorkoutsUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput> | WorkoutsCreateWithoutCharacterInput[] | WorkoutsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: WorkoutsCreateOrConnectWithoutCharacterInput | WorkoutsCreateOrConnectWithoutCharacterInput[]
    upsert?: WorkoutsUpsertWithWhereUniqueWithoutCharacterInput | WorkoutsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: WorkoutsCreateManyCharacterInputEnvelope
    set?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    disconnect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    delete?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    connect?: WorkoutsWhereUniqueInput | WorkoutsWhereUniqueInput[]
    update?: WorkoutsUpdateWithWhereUniqueWithoutCharacterInput | WorkoutsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: WorkoutsUpdateManyWithWhereWithoutCharacterInput | WorkoutsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: WorkoutsScalarWhereInput | WorkoutsScalarWhereInput[]
  }

  export type ProfilesUncheckedUpdateManyWithoutSelectedCharacterNestedInput = {
    create?: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput> | ProfilesCreateWithoutSelectedCharacterInput[] | ProfilesUncheckedCreateWithoutSelectedCharacterInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutSelectedCharacterInput | ProfilesCreateOrConnectWithoutSelectedCharacterInput[]
    upsert?: ProfilesUpsertWithWhereUniqueWithoutSelectedCharacterInput | ProfilesUpsertWithWhereUniqueWithoutSelectedCharacterInput[]
    createMany?: ProfilesCreateManySelectedCharacterInputEnvelope
    set?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    disconnect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    delete?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    update?: ProfilesUpdateWithWhereUniqueWithoutSelectedCharacterInput | ProfilesUpdateWithWhereUniqueWithoutSelectedCharacterInput[]
    updateMany?: ProfilesUpdateManyWithWhereWithoutSelectedCharacterInput | ProfilesUpdateManyWithWhereWithoutSelectedCharacterInput[]
    deleteMany?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
  }

  export type WorkoutExercisesCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput> | WorkoutExercisesCreateWithoutExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExerciseInput | WorkoutExercisesCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExerciseInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type WorkoutExercisesUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput> | WorkoutExercisesCreateWithoutExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExerciseInput | WorkoutExercisesCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExerciseInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type EnumWorkoutCategoryFieldUpdateOperationsInput = {
    set?: $Enums.WorkoutCategory
  }

  export type WorkoutExercisesUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput> | WorkoutExercisesCreateWithoutExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExerciseInput | WorkoutExercisesCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExercisesUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExerciseInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExercisesUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutExerciseInput | WorkoutExercisesUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput> | WorkoutExercisesCreateWithoutExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExerciseInput | WorkoutExercisesCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExercisesUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExerciseInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExercisesUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutExerciseInput | WorkoutExercisesUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<CharactersCreateWithoutWorkoutsInput, CharactersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutWorkoutsInput
    connect?: CharactersWhereUniqueInput
  }

  export type WorkoutExercisesCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type ProgressLogsCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput> | ProgressLogsCreateWithoutWorkoutInput[] | ProgressLogsUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutInput | ProgressLogsCreateOrConnectWithoutWorkoutInput[]
    createMany?: ProgressLogsCreateManyWorkoutInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type ProgressLogsUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput> | ProgressLogsCreateWithoutWorkoutInput[] | ProgressLogsUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutInput | ProgressLogsCreateOrConnectWithoutWorkoutInput[]
    createMany?: ProgressLogsCreateManyWorkoutInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharactersUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<CharactersCreateWithoutWorkoutsInput, CharactersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutWorkoutsInput
    upsert?: CharactersUpsertWithoutWorkoutsInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutWorkoutsInput, CharactersUpdateWithoutWorkoutsInput>, CharactersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutExercisesUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type ProgressLogsUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput> | ProgressLogsCreateWithoutWorkoutInput[] | ProgressLogsUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutInput | ProgressLogsCreateOrConnectWithoutWorkoutInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutWorkoutInput | ProgressLogsUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ProgressLogsCreateManyWorkoutInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutWorkoutInput | ProgressLogsUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutWorkoutInput | ProgressLogsUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type ProgressLogsUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput> | ProgressLogsCreateWithoutWorkoutInput[] | ProgressLogsUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutInput | ProgressLogsCreateOrConnectWithoutWorkoutInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutWorkoutInput | ProgressLogsUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ProgressLogsCreateManyWorkoutInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutWorkoutInput | ProgressLogsUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutWorkoutInput | ProgressLogsUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type WorkoutsCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<WorkoutsCreateWithoutWorkoutExercisesInput, WorkoutsUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutsCreateOrConnectWithoutWorkoutExercisesInput
    connect?: WorkoutsWhereUniqueInput
  }

  export type ExercisesCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExercisesCreateWithoutWorkoutExercisesInput, ExercisesUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExercisesWhereUniqueInput
  }

  export type ProgressLogsCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput> | ProgressLogsCreateWithoutWorkoutExerciseInput[] | ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput | ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: ProgressLogsCreateManyWorkoutExerciseInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type ProgressLogsUncheckedCreateNestedManyWithoutWorkoutExerciseInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput> | ProgressLogsCreateWithoutWorkoutExerciseInput[] | ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput | ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput[]
    createMany?: ProgressLogsCreateManyWorkoutExerciseInputEnvelope
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
  }

  export type WorkoutsUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<WorkoutsCreateWithoutWorkoutExercisesInput, WorkoutsUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutsCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: WorkoutsUpsertWithoutWorkoutExercisesInput
    connect?: WorkoutsWhereUniqueInput
    update?: XOR<XOR<WorkoutsUpdateToOneWithWhereWithoutWorkoutExercisesInput, WorkoutsUpdateWithoutWorkoutExercisesInput>, WorkoutsUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExercisesUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExercisesCreateWithoutWorkoutExercisesInput, ExercisesUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExercisesUpsertWithoutWorkoutExercisesInput
    connect?: ExercisesWhereUniqueInput
    update?: XOR<XOR<ExercisesUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExercisesUpdateWithoutWorkoutExercisesInput>, ExercisesUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ProgressLogsUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput> | ProgressLogsCreateWithoutWorkoutExerciseInput[] | ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput | ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutWorkoutExerciseInput | ProgressLogsUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: ProgressLogsCreateManyWorkoutExerciseInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutWorkoutExerciseInput | ProgressLogsUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutWorkoutExerciseInput | ProgressLogsUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseNestedInput = {
    create?: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput> | ProgressLogsCreateWithoutWorkoutExerciseInput[] | ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput[]
    connectOrCreate?: ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput | ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput[]
    upsert?: ProgressLogsUpsertWithWhereUniqueWithoutWorkoutExerciseInput | ProgressLogsUpsertWithWhereUniqueWithoutWorkoutExerciseInput[]
    createMany?: ProgressLogsCreateManyWorkoutExerciseInputEnvelope
    set?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    disconnect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    delete?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    connect?: ProgressLogsWhereUniqueInput | ProgressLogsWhereUniqueInput[]
    update?: ProgressLogsUpdateWithWhereUniqueWithoutWorkoutExerciseInput | ProgressLogsUpdateWithWhereUniqueWithoutWorkoutExerciseInput[]
    updateMany?: ProgressLogsUpdateManyWithWhereWithoutWorkoutExerciseInput | ProgressLogsUpdateManyWithWhereWithoutWorkoutExerciseInput[]
    deleteMany?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
  }

  export type UserAchievementsCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput> | UserAchievementsCreateWithoutAchievementInput[] | UserAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutAchievementInput | UserAchievementsCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementsCreateManyAchievementInputEnvelope
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
  }

  export type UserAchievementsUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput> | UserAchievementsCreateWithoutAchievementInput[] | UserAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutAchievementInput | UserAchievementsCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementsCreateManyAchievementInputEnvelope
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
  }

  export type UserAchievementsUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput> | UserAchievementsCreateWithoutAchievementInput[] | UserAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutAchievementInput | UserAchievementsCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementsUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementsUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementsCreateManyAchievementInputEnvelope
    set?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    disconnect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    delete?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    update?: UserAchievementsUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementsUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementsUpdateManyWithWhereWithoutAchievementInput | UserAchievementsUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
  }

  export type UserAchievementsUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput> | UserAchievementsCreateWithoutAchievementInput[] | UserAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementsCreateOrConnectWithoutAchievementInput | UserAchievementsCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementsUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementsUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementsCreateManyAchievementInputEnvelope
    set?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    disconnect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    delete?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    connect?: UserAchievementsWhereUniqueInput | UserAchievementsWhereUniqueInput[]
    update?: UserAchievementsUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementsUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementsUpdateManyWithWhereWithoutAchievementInput | UserAchievementsUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<UsersCreateWithoutUserAchievementsInput, UsersUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserAchievementsInput
    connect?: UsersWhereUniqueInput
  }

  export type AchievementsCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<AchievementsCreateWithoutUserAchievementsInput, AchievementsUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutUserAchievementsInput
    connect?: AchievementsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<UsersCreateWithoutUserAchievementsInput, UsersUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserAchievementsInput
    upsert?: UsersUpsertWithoutUserAchievementsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserAchievementsInput, UsersUpdateWithoutUserAchievementsInput>, UsersUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementsUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<AchievementsCreateWithoutUserAchievementsInput, AchievementsUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutUserAchievementsInput
    upsert?: AchievementsUpsertWithoutUserAchievementsInput
    connect?: AchievementsWhereUniqueInput
    update?: XOR<XOR<AchievementsUpdateToOneWithWhereWithoutUserAchievementsInput, AchievementsUpdateWithoutUserAchievementsInput>, AchievementsUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type UsersCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<UsersCreateWithoutProgressLogsInput, UsersUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProgressLogsInput
    connect?: UsersWhereUniqueInput
  }

  export type WorkoutsCreateNestedOneWithoutProgressLogsInput = {
    create?: XOR<WorkoutsCreateWithoutProgressLogsInput, WorkoutsUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: WorkoutsCreateOrConnectWithoutProgressLogsInput
    connect?: WorkoutsWhereUniqueInput
  }

  export type WorkoutExercisesCreateNestedOneWithoutCompletedSetLogsInput = {
    create?: XOR<WorkoutExercisesCreateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedCreateWithoutCompletedSetLogsInput>
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutCompletedSetLogsInput
    connect?: WorkoutExercisesWhereUniqueInput
  }

  export type EnumProgressLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProgressLogType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutProgressLogsNestedInput = {
    create?: XOR<UsersCreateWithoutProgressLogsInput, UsersUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProgressLogsInput
    upsert?: UsersUpsertWithoutProgressLogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutProgressLogsInput, UsersUpdateWithoutProgressLogsInput>, UsersUncheckedUpdateWithoutProgressLogsInput>
  }

  export type WorkoutsUpdateOneWithoutProgressLogsNestedInput = {
    create?: XOR<WorkoutsCreateWithoutProgressLogsInput, WorkoutsUncheckedCreateWithoutProgressLogsInput>
    connectOrCreate?: WorkoutsCreateOrConnectWithoutProgressLogsInput
    upsert?: WorkoutsUpsertWithoutProgressLogsInput
    disconnect?: WorkoutsWhereInput | boolean
    delete?: WorkoutsWhereInput | boolean
    connect?: WorkoutsWhereUniqueInput
    update?: XOR<XOR<WorkoutsUpdateToOneWithWhereWithoutProgressLogsInput, WorkoutsUpdateWithoutProgressLogsInput>, WorkoutsUncheckedUpdateWithoutProgressLogsInput>
  }

  export type WorkoutExercisesUpdateOneWithoutCompletedSetLogsNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedCreateWithoutCompletedSetLogsInput>
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutCompletedSetLogsInput
    upsert?: WorkoutExercisesUpsertWithoutCompletedSetLogsInput
    disconnect?: WorkoutExercisesWhereInput | boolean
    delete?: WorkoutExercisesWhereInput | boolean
    connect?: WorkoutExercisesWhereUniqueInput
    update?: XOR<XOR<WorkoutExercisesUpdateToOneWithWhereWithoutCompletedSetLogsInput, WorkoutExercisesUpdateWithoutCompletedSetLogsInput>, WorkoutExercisesUncheckedUpdateWithoutCompletedSetLogsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumGoalFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalFilter<$PrismaModel> | $Enums.Goal
  }

  export type NestedEnumFitnessLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelFilter<$PrismaModel> | $Enums.FitnessLevel
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumGoalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel>
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalWithAggregatesFilter<$PrismaModel> | $Enums.Goal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalFilter<$PrismaModel>
    _max?: NestedEnumGoalFilter<$PrismaModel>
  }

  export type NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FitnessLevel | EnumFitnessLevelFieldRefInput<$PrismaModel>
    in?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.FitnessLevel[] | ListEnumFitnessLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumFitnessLevelWithAggregatesFilter<$PrismaModel> | $Enums.FitnessLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFitnessLevelFilter<$PrismaModel>
    _max?: NestedEnumFitnessLevelFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCharacterDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterDifficulty | EnumCharacterDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterDifficultyFilter<$PrismaModel> | $Enums.CharacterDifficulty
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCharacterDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterDifficulty | EnumCharacterDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterDifficulty[] | ListEnumCharacterDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.CharacterDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterDifficultyFilter<$PrismaModel>
    _max?: NestedEnumCharacterDifficultyFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWorkoutCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutCategory | EnumWorkoutCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutCategoryFilter<$PrismaModel> | $Enums.WorkoutCategory
  }

  export type NestedEnumWorkoutCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutCategory | EnumWorkoutCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkoutCategory[] | ListEnumWorkoutCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkoutCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkoutCategoryFilter<$PrismaModel>
    _max?: NestedEnumWorkoutCategoryFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProgressLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressLogType | EnumProgressLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressLogTypeFilter<$PrismaModel> | $Enums.ProgressLogType
  }

  export type NestedEnumProgressLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressLogType | EnumProgressLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressLogType[] | ListEnumProgressLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProgressLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressLogTypeFilter<$PrismaModel>
    _max?: NestedEnumProgressLogTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProfilesCreateWithoutUserInput = {
    id?: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedCharacter?: CharactersCreateNestedOneWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateWithoutUserInput = {
    id?: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    selectedCharacterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesCreateOrConnectWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogsCreateWithoutUserInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workout?: WorkoutsCreateNestedOneWithoutProgressLogsInput
    workoutExercise?: WorkoutExercisesCreateNestedOneWithoutCompletedSetLogsInput
  }

  export type ProgressLogsUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
    workoutExerciseId?: string | null
  }

  export type ProgressLogsCreateOrConnectWithoutUserInput = {
    where: ProgressLogsWhereUniqueInput
    create: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogsCreateManyUserInputEnvelope = {
    data: ProgressLogsCreateManyUserInput | ProgressLogsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementsCreateWithoutUserInput = {
    id?: string
    unlockedAt?: Date | string
    achievement: AchievementsCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementsUncheckedCreateWithoutUserInput = {
    id?: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementsCreateOrConnectWithoutUserInput = {
    where: UserAchievementsWhereUniqueInput
    create: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementsCreateManyUserInputEnvelope = {
    data: UserAchievementsCreateManyUserInput | UserAchievementsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesUpsertWithoutUserInput = {
    update: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProfilesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedCharacter?: CharactersUpdateOneWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    selectedCharacterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogsUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressLogsWhereUniqueInput
    update: XOR<ProgressLogsUpdateWithoutUserInput, ProgressLogsUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressLogsCreateWithoutUserInput, ProgressLogsUncheckedCreateWithoutUserInput>
  }

  export type ProgressLogsUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressLogsWhereUniqueInput
    data: XOR<ProgressLogsUpdateWithoutUserInput, ProgressLogsUncheckedUpdateWithoutUserInput>
  }

  export type ProgressLogsUpdateManyWithWhereWithoutUserInput = {
    where: ProgressLogsScalarWhereInput
    data: XOR<ProgressLogsUpdateManyMutationInput, ProgressLogsUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressLogsScalarWhereInput = {
    AND?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
    OR?: ProgressLogsScalarWhereInput[]
    NOT?: ProgressLogsScalarWhereInput | ProgressLogsScalarWhereInput[]
    id?: StringFilter<"ProgressLogs"> | string
    userId?: StringFilter<"ProgressLogs"> | string
    type?: EnumProgressLogTypeFilter<"ProgressLogs"> | $Enums.ProgressLogType
    value?: FloatNullableFilter<"ProgressLogs"> | number | null
    meta?: JsonNullableFilter<"ProgressLogs">
    loggedAt?: DateTimeFilter<"ProgressLogs"> | Date | string
    workoutId?: StringNullableFilter<"ProgressLogs"> | string | null
    workoutExerciseId?: StringNullableFilter<"ProgressLogs"> | string | null
  }

  export type UserAchievementsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementsWhereUniqueInput
    update: XOR<UserAchievementsUpdateWithoutUserInput, UserAchievementsUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementsCreateWithoutUserInput, UserAchievementsUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementsWhereUniqueInput
    data: XOR<UserAchievementsUpdateWithoutUserInput, UserAchievementsUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementsUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementsScalarWhereInput
    data: XOR<UserAchievementsUpdateManyMutationInput, UserAchievementsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementsScalarWhereInput = {
    AND?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
    OR?: UserAchievementsScalarWhereInput[]
    NOT?: UserAchievementsScalarWhereInput | UserAchievementsScalarWhereInput[]
    id?: StringFilter<"UserAchievements"> | string
    userId?: StringFilter<"UserAchievements"> | string
    achievementId?: StringFilter<"UserAchievements"> | string
    unlockedAt?: DateTimeFilter<"UserAchievements"> | Date | string
  }

  export type UsersCreateWithoutProfilesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutUserInput
    UserAchievements?: UserAchievementsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutProfilesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutUserInput
    UserAchievements?: UserAchievementsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutProfilesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
  }

  export type CharactersCreateWithoutProfilesInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Workouts?: WorkoutsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutProfilesInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Workouts?: WorkoutsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutProfilesInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutProfilesInput, CharactersUncheckedCreateWithoutProfilesInput>
  }

  export type UsersUpsertWithoutProfilesInput = {
    update: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type UsersUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProgressLogs?: ProgressLogsUpdateManyWithoutUserNestedInput
    UserAchievements?: UserAchievementsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutUserNestedInput
    UserAchievements?: UserAchievementsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharactersUpsertWithoutProfilesInput = {
    update: XOR<CharactersUpdateWithoutProfilesInput, CharactersUncheckedUpdateWithoutProfilesInput>
    create: XOR<CharactersCreateWithoutProfilesInput, CharactersUncheckedCreateWithoutProfilesInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutProfilesInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutProfilesInput, CharactersUncheckedUpdateWithoutProfilesInput>
  }

  export type CharactersUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workouts?: WorkoutsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workouts?: WorkoutsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type WorkoutsCreateWithoutCharacterInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutWorkoutInput
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsUncheckedCreateWithoutCharacterInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsCreateOrConnectWithoutCharacterInput = {
    where: WorkoutsWhereUniqueInput
    create: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput>
  }

  export type WorkoutsCreateManyCharacterInputEnvelope = {
    data: WorkoutsCreateManyCharacterInput | WorkoutsCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesCreateWithoutSelectedCharacterInput = {
    id?: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateWithoutSelectedCharacterInput = {
    id?: string
    userId: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilesCreateOrConnectWithoutSelectedCharacterInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput>
  }

  export type ProfilesCreateManySelectedCharacterInputEnvelope = {
    data: ProfilesCreateManySelectedCharacterInput | ProfilesCreateManySelectedCharacterInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutsUpsertWithWhereUniqueWithoutCharacterInput = {
    where: WorkoutsWhereUniqueInput
    update: XOR<WorkoutsUpdateWithoutCharacterInput, WorkoutsUncheckedUpdateWithoutCharacterInput>
    create: XOR<WorkoutsCreateWithoutCharacterInput, WorkoutsUncheckedCreateWithoutCharacterInput>
  }

  export type WorkoutsUpdateWithWhereUniqueWithoutCharacterInput = {
    where: WorkoutsWhereUniqueInput
    data: XOR<WorkoutsUpdateWithoutCharacterInput, WorkoutsUncheckedUpdateWithoutCharacterInput>
  }

  export type WorkoutsUpdateManyWithWhereWithoutCharacterInput = {
    where: WorkoutsScalarWhereInput
    data: XOR<WorkoutsUpdateManyMutationInput, WorkoutsUncheckedUpdateManyWithoutCharacterInput>
  }

  export type WorkoutsScalarWhereInput = {
    AND?: WorkoutsScalarWhereInput | WorkoutsScalarWhereInput[]
    OR?: WorkoutsScalarWhereInput[]
    NOT?: WorkoutsScalarWhereInput | WorkoutsScalarWhereInput[]
    id?: StringFilter<"Workouts"> | string
    characterId?: StringFilter<"Workouts"> | string
    dayIndex?: IntFilter<"Workouts"> | number
    category?: EnumWorkoutCategoryFilter<"Workouts"> | $Enums.WorkoutCategory
    title?: StringFilter<"Workouts"> | string
    targetMin?: IntNullableFilter<"Workouts"> | number | null
    isActive?: BoolFilter<"Workouts"> | boolean
    createdAt?: DateTimeFilter<"Workouts"> | Date | string
  }

  export type ProfilesUpsertWithWhereUniqueWithoutSelectedCharacterInput = {
    where: ProfilesWhereUniqueInput
    update: XOR<ProfilesUpdateWithoutSelectedCharacterInput, ProfilesUncheckedUpdateWithoutSelectedCharacterInput>
    create: XOR<ProfilesCreateWithoutSelectedCharacterInput, ProfilesUncheckedCreateWithoutSelectedCharacterInput>
  }

  export type ProfilesUpdateWithWhereUniqueWithoutSelectedCharacterInput = {
    where: ProfilesWhereUniqueInput
    data: XOR<ProfilesUpdateWithoutSelectedCharacterInput, ProfilesUncheckedUpdateWithoutSelectedCharacterInput>
  }

  export type ProfilesUpdateManyWithWhereWithoutSelectedCharacterInput = {
    where: ProfilesScalarWhereInput
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyWithoutSelectedCharacterInput>
  }

  export type ProfilesScalarWhereInput = {
    AND?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
    OR?: ProfilesScalarWhereInput[]
    NOT?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
    id?: StringFilter<"Profiles"> | string
    userId?: StringFilter<"Profiles"> | string
    heightCm?: IntFilter<"Profiles"> | number
    weightKg?: FloatFilter<"Profiles"> | number
    goal?: EnumGoalFilter<"Profiles"> | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFilter<"Profiles"> | $Enums.FitnessLevel
    selectedCharacterId?: StringNullableFilter<"Profiles"> | string | null
    createdAt?: DateTimeFilter<"Profiles"> | Date | string
    updatedAt?: DateTimeFilter<"Profiles"> | Date | string
  }

  export type WorkoutExercisesCreateWithoutExerciseInput = {
    id?: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    workout: WorkoutsCreateNestedOneWithoutWorkoutExercisesInput
    completedSetLogs?: ProgressLogsCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesUncheckedCreateWithoutExerciseInput = {
    id?: string
    workoutId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    completedSetLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    create: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExercisesCreateManyExerciseInputEnvelope = {
    data: WorkoutExercisesCreateManyExerciseInput | WorkoutExercisesCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExercisesUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    update: XOR<WorkoutExercisesUpdateWithoutExerciseInput, WorkoutExercisesUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExercisesCreateWithoutExerciseInput, WorkoutExercisesUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExercisesUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    data: XOR<WorkoutExercisesUpdateWithoutExerciseInput, WorkoutExercisesUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExercisesUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExercisesScalarWhereInput
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutExercisesScalarWhereInput = {
    AND?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
    OR?: WorkoutExercisesScalarWhereInput[]
    NOT?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
    id?: StringFilter<"WorkoutExercises"> | string
    workoutId?: StringFilter<"WorkoutExercises"> | string
    exerciseId?: StringFilter<"WorkoutExercises"> | string
    sortOrder?: IntFilter<"WorkoutExercises"> | number
    sets?: IntFilter<"WorkoutExercises"> | number
    repsTarget?: IntFilter<"WorkoutExercises"> | number
    restSec?: IntFilter<"WorkoutExercises"> | number
  }

  export type CharactersCreateWithoutWorkoutsInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfilesCreateNestedManyWithoutSelectedCharacterInput
  }

  export type CharactersUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    name: string
    bodyType: string
    difficulty: $Enums.CharacterDifficulty
    trainingStyle: string
    xpModifier?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profiles?: ProfilesUncheckedCreateNestedManyWithoutSelectedCharacterInput
  }

  export type CharactersCreateOrConnectWithoutWorkoutsInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutWorkoutsInput, CharactersUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutExercisesCreateWithoutWorkoutInput = {
    id?: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    exercise: ExercisesCreateNestedOneWithoutWorkoutExercisesInput
    completedSetLogs?: ProgressLogsCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesUncheckedCreateWithoutWorkoutInput = {
    id?: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    completedSetLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutExerciseInput
  }

  export type WorkoutExercisesCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    create: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisesCreateManyWorkoutInputEnvelope = {
    data: WorkoutExercisesCreateManyWorkoutInput | WorkoutExercisesCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type ProgressLogsCreateWithoutWorkoutInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    user: UsersCreateNestedOneWithoutProgressLogsInput
    workoutExercise?: WorkoutExercisesCreateNestedOneWithoutCompletedSetLogsInput
  }

  export type ProgressLogsUncheckedCreateWithoutWorkoutInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutExerciseId?: string | null
  }

  export type ProgressLogsCreateOrConnectWithoutWorkoutInput = {
    where: ProgressLogsWhereUniqueInput
    create: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput>
  }

  export type ProgressLogsCreateManyWorkoutInputEnvelope = {
    data: ProgressLogsCreateManyWorkoutInput | ProgressLogsCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithoutWorkoutsInput = {
    update: XOR<CharactersUpdateWithoutWorkoutsInput, CharactersUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<CharactersCreateWithoutWorkoutsInput, CharactersUncheckedCreateWithoutWorkoutsInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutWorkoutsInput, CharactersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type CharactersUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUpdateManyWithoutSelectedCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumCharacterDifficultyFieldUpdateOperationsInput | $Enums.CharacterDifficulty
    trainingStyle?: StringFieldUpdateOperationsInput | string
    xpModifier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfilesUncheckedUpdateManyWithoutSelectedCharacterNestedInput
  }

  export type WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    update: XOR<WorkoutExercisesUpdateWithoutWorkoutInput, WorkoutExercisesUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    data: XOR<WorkoutExercisesUpdateWithoutWorkoutInput, WorkoutExercisesUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExercisesScalarWhereInput
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ProgressLogsUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: ProgressLogsWhereUniqueInput
    update: XOR<ProgressLogsUpdateWithoutWorkoutInput, ProgressLogsUncheckedUpdateWithoutWorkoutInput>
    create: XOR<ProgressLogsCreateWithoutWorkoutInput, ProgressLogsUncheckedCreateWithoutWorkoutInput>
  }

  export type ProgressLogsUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: ProgressLogsWhereUniqueInput
    data: XOR<ProgressLogsUpdateWithoutWorkoutInput, ProgressLogsUncheckedUpdateWithoutWorkoutInput>
  }

  export type ProgressLogsUpdateManyWithWhereWithoutWorkoutInput = {
    where: ProgressLogsScalarWhereInput
    data: XOR<ProgressLogsUpdateManyMutationInput, ProgressLogsUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutsCreateWithoutWorkoutExercisesInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    character: CharactersCreateNestedOneWithoutWorkoutsInput
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: string
    characterId: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsCreateOrConnectWithoutWorkoutExercisesInput = {
    where: WorkoutsWhereUniqueInput
    create: XOR<WorkoutsCreateWithoutWorkoutExercisesInput, WorkoutsUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type ExercisesCreateWithoutWorkoutExercisesInput = {
    id?: string
    name: string
    category: $Enums.WorkoutCategory
    unit?: string | null
    createdAt?: Date | string
  }

  export type ExercisesUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: string
    name: string
    category: $Enums.WorkoutCategory
    unit?: string | null
    createdAt?: Date | string
  }

  export type ExercisesCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExercisesWhereUniqueInput
    create: XOR<ExercisesCreateWithoutWorkoutExercisesInput, ExercisesUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type ProgressLogsCreateWithoutWorkoutExerciseInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    user: UsersCreateNestedOneWithoutProgressLogsInput
    workout?: WorkoutsCreateNestedOneWithoutProgressLogsInput
  }

  export type ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
  }

  export type ProgressLogsCreateOrConnectWithoutWorkoutExerciseInput = {
    where: ProgressLogsWhereUniqueInput
    create: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type ProgressLogsCreateManyWorkoutExerciseInputEnvelope = {
    data: ProgressLogsCreateManyWorkoutExerciseInput | ProgressLogsCreateManyWorkoutExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutsUpsertWithoutWorkoutExercisesInput = {
    update: XOR<WorkoutsUpdateWithoutWorkoutExercisesInput, WorkoutsUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<WorkoutsCreateWithoutWorkoutExercisesInput, WorkoutsUncheckedCreateWithoutWorkoutExercisesInput>
    where?: WorkoutsWhereInput
  }

  export type WorkoutsUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: WorkoutsWhereInput
    data: XOR<WorkoutsUpdateWithoutWorkoutExercisesInput, WorkoutsUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type WorkoutsUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharactersUpdateOneRequiredWithoutWorkoutsNestedInput
    ProgressLogs?: ProgressLogsUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type ExercisesUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExercisesUpdateWithoutWorkoutExercisesInput, ExercisesUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExercisesCreateWithoutWorkoutExercisesInput, ExercisesUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExercisesWhereInput
  }

  export type ExercisesUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExercisesWhereInput
    data: XOR<ExercisesUpdateWithoutWorkoutExercisesInput, ExercisesUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExercisesUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExercisesUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressLogsUpsertWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: ProgressLogsWhereUniqueInput
    update: XOR<ProgressLogsUpdateWithoutWorkoutExerciseInput, ProgressLogsUncheckedUpdateWithoutWorkoutExerciseInput>
    create: XOR<ProgressLogsCreateWithoutWorkoutExerciseInput, ProgressLogsUncheckedCreateWithoutWorkoutExerciseInput>
  }

  export type ProgressLogsUpdateWithWhereUniqueWithoutWorkoutExerciseInput = {
    where: ProgressLogsWhereUniqueInput
    data: XOR<ProgressLogsUpdateWithoutWorkoutExerciseInput, ProgressLogsUncheckedUpdateWithoutWorkoutExerciseInput>
  }

  export type ProgressLogsUpdateManyWithWhereWithoutWorkoutExerciseInput = {
    where: ProgressLogsScalarWhereInput
    data: XOR<ProgressLogsUpdateManyMutationInput, ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseInput>
  }

  export type UserAchievementsCreateWithoutAchievementInput = {
    id?: string
    unlockedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementsUncheckedCreateWithoutAchievementInput = {
    id?: string
    userId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementsCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementsWhereUniqueInput
    create: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementsCreateManyAchievementInputEnvelope = {
    data: UserAchievementsCreateManyAchievementInput | UserAchievementsCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementsUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementsWhereUniqueInput
    update: XOR<UserAchievementsUpdateWithoutAchievementInput, UserAchievementsUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementsCreateWithoutAchievementInput, UserAchievementsUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementsUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementsWhereUniqueInput
    data: XOR<UserAchievementsUpdateWithoutAchievementInput, UserAchievementsUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementsUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementsScalarWhereInput
    data: XOR<UserAchievementsUpdateManyMutationInput, UserAchievementsUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UsersCreateWithoutUserAchievementsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesCreateNestedOneWithoutUserInput
    ProgressLogs?: ProgressLogsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserAchievementsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    ProgressLogs?: ProgressLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserAchievementsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserAchievementsInput, UsersUncheckedCreateWithoutUserAchievementsInput>
  }

  export type AchievementsCreateWithoutUserAchievementsInput = {
    id?: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden?: boolean
    createdAt?: Date | string
  }

  export type AchievementsUncheckedCreateWithoutUserAchievementsInput = {
    id?: string
    key: string
    name: string
    description: string
    criteriaType: string
    criteriaValue: number
    isHidden?: boolean
    createdAt?: Date | string
  }

  export type AchievementsCreateOrConnectWithoutUserAchievementsInput = {
    where: AchievementsWhereUniqueInput
    create: XOR<AchievementsCreateWithoutUserAchievementsInput, AchievementsUncheckedCreateWithoutUserAchievementsInput>
  }

  export type UsersUpsertWithoutUserAchievementsInput = {
    update: XOR<UsersUpdateWithoutUserAchievementsInput, UsersUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<UsersCreateWithoutUserAchievementsInput, UsersUncheckedCreateWithoutUserAchievementsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserAchievementsInput, UsersUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type UsersUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUpdateOneWithoutUserNestedInput
    ProgressLogs?: ProgressLogsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AchievementsUpsertWithoutUserAchievementsInput = {
    update: XOR<AchievementsUpdateWithoutUserAchievementsInput, AchievementsUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<AchievementsCreateWithoutUserAchievementsInput, AchievementsUncheckedCreateWithoutUserAchievementsInput>
    where?: AchievementsWhereInput
  }

  export type AchievementsUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: AchievementsWhereInput
    data: XOR<AchievementsUpdateWithoutUserAchievementsInput, AchievementsUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementsUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementsUncheckedUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    criteriaType?: StringFieldUpdateOperationsInput | string
    criteriaValue?: IntFieldUpdateOperationsInput | number
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutProgressLogsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesCreateNestedOneWithoutUserInput
    UserAchievements?: UserAchievementsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    Profiles?: ProfilesUncheckedCreateNestedOneWithoutUserInput
    UserAchievements?: UserAchievementsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutProgressLogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutProgressLogsInput, UsersUncheckedCreateWithoutProgressLogsInput>
  }

  export type WorkoutsCreateWithoutProgressLogsInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    character: CharactersCreateNestedOneWithoutWorkoutsInput
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsUncheckedCreateWithoutProgressLogsInput = {
    id?: string
    characterId: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutsCreateOrConnectWithoutProgressLogsInput = {
    where: WorkoutsWhereUniqueInput
    create: XOR<WorkoutsCreateWithoutProgressLogsInput, WorkoutsUncheckedCreateWithoutProgressLogsInput>
  }

  export type WorkoutExercisesCreateWithoutCompletedSetLogsInput = {
    id?: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
    workout: WorkoutsCreateNestedOneWithoutWorkoutExercisesInput
    exercise: ExercisesCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExercisesUncheckedCreateWithoutCompletedSetLogsInput = {
    id?: string
    workoutId: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
  }

  export type WorkoutExercisesCreateOrConnectWithoutCompletedSetLogsInput = {
    where: WorkoutExercisesWhereUniqueInput
    create: XOR<WorkoutExercisesCreateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedCreateWithoutCompletedSetLogsInput>
  }

  export type UsersUpsertWithoutProgressLogsInput = {
    update: XOR<UsersUpdateWithoutProgressLogsInput, UsersUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<UsersCreateWithoutProgressLogsInput, UsersUncheckedCreateWithoutProgressLogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutProgressLogsInput, UsersUncheckedUpdateWithoutProgressLogsInput>
  }

  export type UsersUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUpdateOneWithoutUserNestedInput
    UserAchievements?: UserAchievementsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profiles?: ProfilesUncheckedUpdateOneWithoutUserNestedInput
    UserAchievements?: UserAchievementsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutsUpsertWithoutProgressLogsInput = {
    update: XOR<WorkoutsUpdateWithoutProgressLogsInput, WorkoutsUncheckedUpdateWithoutProgressLogsInput>
    create: XOR<WorkoutsCreateWithoutProgressLogsInput, WorkoutsUncheckedCreateWithoutProgressLogsInput>
    where?: WorkoutsWhereInput
  }

  export type WorkoutsUpdateToOneWithWhereWithoutProgressLogsInput = {
    where?: WorkoutsWhereInput
    data: XOR<WorkoutsUpdateWithoutProgressLogsInput, WorkoutsUncheckedUpdateWithoutProgressLogsInput>
  }

  export type WorkoutsUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    character?: CharactersUpdateOneRequiredWithoutWorkoutsNestedInput
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsUncheckedUpdateWithoutProgressLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutExercisesUpsertWithoutCompletedSetLogsInput = {
    update: XOR<WorkoutExercisesUpdateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedUpdateWithoutCompletedSetLogsInput>
    create: XOR<WorkoutExercisesCreateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedCreateWithoutCompletedSetLogsInput>
    where?: WorkoutExercisesWhereInput
  }

  export type WorkoutExercisesUpdateToOneWithWhereWithoutCompletedSetLogsInput = {
    where?: WorkoutExercisesWhereInput
    data: XOR<WorkoutExercisesUpdateWithoutCompletedSetLogsInput, WorkoutExercisesUncheckedUpdateWithoutCompletedSetLogsInput>
  }

  export type WorkoutExercisesUpdateWithoutCompletedSetLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    workout?: WorkoutsUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    exercise?: ExercisesUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateWithoutCompletedSetLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressLogsCreateManyUserInput = {
    id?: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
    workoutExerciseId?: string | null
  }

  export type UserAchievementsCreateManyUserInput = {
    id?: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type ProgressLogsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutsUpdateOneWithoutProgressLogsNestedInput
    workoutExercise?: WorkoutExercisesUpdateOneWithoutCompletedSetLogsNestedInput
  }

  export type ProgressLogsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAchievementsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementsUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutsCreateManyCharacterInput = {
    id?: string
    dayIndex: number
    category: $Enums.WorkoutCategory
    title: string
    targetMin?: number | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProfilesCreateManySelectedCharacterInput = {
    id?: string
    userId: string
    heightCm: number
    weightKg: number
    goal: $Enums.Goal
    fitnessLevel: $Enums.FitnessLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutsUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutWorkoutNestedInput
    ProgressLogs?: ProgressLogsUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput
    ProgressLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutsUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayIndex?: IntFieldUpdateOperationsInput | number
    category?: EnumWorkoutCategoryFieldUpdateOperationsInput | $Enums.WorkoutCategory
    title?: StringFieldUpdateOperationsInput | string
    targetMin?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUpdateWithoutSelectedCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateWithoutSelectedCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesUncheckedUpdateManyWithoutSelectedCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    heightCm?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    goal?: EnumGoalFieldUpdateOperationsInput | $Enums.Goal
    fitnessLevel?: EnumFitnessLevelFieldUpdateOperationsInput | $Enums.FitnessLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateManyExerciseInput = {
    id?: string
    workoutId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
  }

  export type WorkoutExercisesUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    workout?: WorkoutsUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    completedSetLogs?: ProgressLogsUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    completedSetLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisesCreateManyWorkoutInput = {
    id?: string
    exerciseId: string
    sortOrder: number
    sets: number
    repsTarget: number
    restSec: number
  }

  export type ProgressLogsCreateManyWorkoutInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutExerciseId?: string | null
  }

  export type WorkoutExercisesUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    exercise?: ExercisesUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    completedSetLogs?: ProgressLogsUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
    completedSetLogs?: ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    sets?: IntFieldUpdateOperationsInput | number
    repsTarget?: IntFieldUpdateOperationsInput | number
    restSec?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressLogsUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProgressLogsNestedInput
    workoutExercise?: WorkoutExercisesUpdateOneWithoutCompletedSetLogsNestedInput
  }

  export type ProgressLogsUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogsUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutExerciseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogsCreateManyWorkoutExerciseInput = {
    id?: string
    userId: string
    type: $Enums.ProgressLogType
    value?: number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: Date | string
    workoutId?: string | null
  }

  export type ProgressLogsUpdateWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProgressLogsNestedInput
    workout?: WorkoutsUpdateOneWithoutProgressLogsNestedInput
  }

  export type ProgressLogsUncheckedUpdateWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressLogsUncheckedUpdateManyWithoutWorkoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumProgressLogTypeFieldUpdateOperationsInput | $Enums.ProgressLogType
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAchievementsCreateManyAchievementInput = {
    id?: string
    userId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementsUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementsUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementsUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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