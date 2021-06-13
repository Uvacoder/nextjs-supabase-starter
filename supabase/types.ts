/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/profile": {
    get: {
      parameters: {
        query: {
          /** Unique identification string */
          id?: parameters["rowFilter.profile.id"];
          /** Personal authorization address */
          email?: parameters["rowFilter.profile.email"];
          /** Method used for authorization */
          provider?: parameters["rowFilter.profile.provider"];
          /** Name of registered user */
          full_name?: parameters["rowFilter.profile.full_name"];
          /** Custom avatar type for user */
          avatar_type?: parameters["rowFilter.profile.avatar_type"];
          /** Personal identification number */
          pin?: parameters["rowFilter.profile.pin"];
          /** Time of account confirmation */
          confirmed_at?: parameters["rowFilter.profile.confirmed_at"];
          /** Time of account creation */
          created_at?: parameters["rowFilter.profile.created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profile"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          /** Unique identification string */
          id?: parameters["rowFilter.profile.id"];
          /** Personal authorization address */
          email?: parameters["rowFilter.profile.email"];
          /** Method used for authorization */
          provider?: parameters["rowFilter.profile.provider"];
          /** Name of registered user */
          full_name?: parameters["rowFilter.profile.full_name"];
          /** Custom avatar type for user */
          avatar_type?: parameters["rowFilter.profile.avatar_type"];
          /** Personal identification number */
          pin?: parameters["rowFilter.profile.pin"];
          /** Time of account confirmation */
          confirmed_at?: parameters["rowFilter.profile.confirmed_at"];
          /** Time of account creation */
          created_at?: parameters["rowFilter.profile.created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          /** Unique identification string */
          id?: parameters["rowFilter.profile.id"];
          /** Personal authorization address */
          email?: parameters["rowFilter.profile.email"];
          /** Method used for authorization */
          provider?: parameters["rowFilter.profile.provider"];
          /** Name of registered user */
          full_name?: parameters["rowFilter.profile.full_name"];
          /** Custom avatar type for user */
          avatar_type?: parameters["rowFilter.profile.avatar_type"];
          /** Personal identification number */
          pin?: parameters["rowFilter.profile.pin"];
          /** Time of account confirmation */
          confirmed_at?: parameters["rowFilter.profile.confirmed_at"];
          /** Time of account creation */
          created_at?: parameters["rowFilter.profile.created_at"];
        };
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/timeline": {
    get: {
      parameters: {
        query: {
          /** Serial identification for event */
          task?: parameters["rowFilter.timeline.task"];
          /** Unique identification string */
          id?: parameters["rowFilter.timeline.id"];
          /** Log of initiated event */
          event?: parameters["rowFilter.timeline.event"];
          /** Information relating to event */
          description?: parameters["rowFilter.timeline.description"];
          /** Time of event initialisation */
          timestamp?: parameters["rowFilter.timeline.timestamp"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["timeline"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** timeline */
          timeline?: definitions["timeline"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          /** Serial identification for event */
          task?: parameters["rowFilter.timeline.task"];
          /** Unique identification string */
          id?: parameters["rowFilter.timeline.id"];
          /** Log of initiated event */
          event?: parameters["rowFilter.timeline.event"];
          /** Information relating to event */
          description?: parameters["rowFilter.timeline.description"];
          /** Time of event initialisation */
          timestamp?: parameters["rowFilter.timeline.timestamp"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          /** Serial identification for event */
          task?: parameters["rowFilter.timeline.task"];
          /** Unique identification string */
          id?: parameters["rowFilter.timeline.id"];
          /** Log of initiated event */
          event?: parameters["rowFilter.timeline.event"];
          /** Information relating to event */
          description?: parameters["rowFilter.timeline.description"];
          /** Time of event initialisation */
          timestamp?: parameters["rowFilter.timeline.timestamp"];
        };
        body: {
          /** timeline */
          timeline?: definitions["timeline"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/add_sign_in": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/create_new_profile": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  profile: {
    /**
     * Unique identification string
     *
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Personal authorization address */
    email: string;
    /** Method used for authorization */
    provider: string;
    /** Name of registered user */
    full_name?: string;
    /** Custom avatar type for user */
    avatar_type: string;
    /** Personal identification number */
    pin?: string;
    /** Time of account confirmation */
    confirmed_at: string;
    /** Time of account creation */
    created_at: string;
  };
  timeline: {
    /**
     * Serial identification for event
     *
     * Note:
     * This is a Primary Key.<pk/>
     */
    task: number;
    /** Unique identification string */
    id: string;
    /** Log of initiated event */
    event: string;
    /** Information relating to event */
    description: string;
    /** Time of event initialisation */
    timestamp: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** profile */
  "body.profile": definitions["profile"];
  /** Unique identification string */
  "rowFilter.profile.id": string;
  /** Personal authorization address */
  "rowFilter.profile.email": string;
  /** Method used for authorization */
  "rowFilter.profile.provider": string;
  /** Name of registered user */
  "rowFilter.profile.full_name": string;
  /** Custom avatar type for user */
  "rowFilter.profile.avatar_type": string;
  /** Personal identification number */
  "rowFilter.profile.pin": string;
  /** Time of account confirmation */
  "rowFilter.profile.confirmed_at": string;
  /** Time of account creation */
  "rowFilter.profile.created_at": string;
  /** timeline */
  "body.timeline": definitions["timeline"];
  /** Serial identification for event */
  "rowFilter.timeline.task": string;
  /** Unique identification string */
  "rowFilter.timeline.id": string;
  /** Log of initiated event */
  "rowFilter.timeline.event": string;
  /** Information relating to event */
  "rowFilter.timeline.description": string;
  /** Time of event initialisation */
  "rowFilter.timeline.timestamp": string;
}

export interface operations {}

export interface external {}
