var cleanObject = require("./index");
// Undefined Object
const undefinedObject = undefined;
const undefinedObjectResult = null;
test("Test undefined Object", () => {
  expect(cleanObject(undefinedObject)).toEqual(undefinedObjectResult);
});

// Simple object
const simpleObject = { nome: "Carlo", cognome: "Rossi" };
const simpleObjectCleaned = { nome: null, cognome: null };
test("Set keys to null in simple object", () => {
  expect(cleanObject(simpleObject)).toEqual(simpleObjectCleaned);
});

// Simple object with numbers
const simpleObjectWithNumbers = { nome: "Carlo", cognome: "Rossi", eta: 37 };
const simpleObjectWithNumbersCleaned = { nome: null, cognome: null, eta: null };
test("Set keys to null when numbers", () => {
  expect(cleanObject(simpleObjectWithNumbers)).toEqual(
    simpleObjectWithNumbersCleaned
  );
});

// Simple Object with null values
const simpleObjectWithNullValues = { nome: null, cognome: "Rossi" };
const simpleObjectWithNullValuesCleaned = { nome: null, cognome: null };
test("Set keys to null when null values", () => {
  expect(cleanObject(simpleObjectWithNullValues)).toEqual(
    simpleObjectWithNullValuesCleaned
  );
});

// Simple array of elements
const simpleArray = [1, 2, 3, 4];
const simpleArrayCleaned = [];
test("Set array size to zero", () => {
  expect(cleanObject(simpleArray)).toEqual(simpleArrayCleaned);
});

// Simple array of null elements
const simpleArrayOfNull = [null, null, null, null];
const simpleArrayOfNullCleaned = [];
test("Set array of null elements size to zero", () => {
  expect(cleanObject(simpleArrayOfNull)).toEqual(simpleArrayOfNullCleaned);
});
// Array of Objects
const arrayOfObjects = [
  { nome: "Carlo", cognome: "Rossi" },
  { nome: "Mauro", cognome: "Bianchi" }
];
const arrayOfObjectsCleaned = [{ nome: null, cognome: null }];
test("Set array size to 1 and object keys to null", () => {
  expect(cleanObject(arrayOfObjects)).toEqual(arrayOfObjectsCleaned);
});

//Array of Arrays of Elements
const arrayOfArrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]];
const arrayOfArraysCleaned = [];
test("Clean Array of Arrays", () => {
  expect(cleanObject(arrayOfArrays)).toEqual(arrayOfArraysCleaned);
});

//Array of Arrays of Objects
const arrayOfArraysOfObjects = [
  [
    { nome: "carlo", cognome: "rossi" },
    { nome: "giacomo", cognome: "bianchi" }
  ],
  [
    { lavoro: "programmatore", azienda: "ld" },
    { lavoro: "business analyst", azienda: "ld" }
  ],
  [{ sesso: "M", eta: "24" }, { sesso: "F", eta: "25" }]
];
const arrayOfArraysOfObjectsCleaned = [];
test("Clean array of arrays of objects", () => {
  expect(cleanObject(arrayOfArraysOfObjects)).toEqual(
    arrayOfArraysOfObjectsCleaned
  );
});

// Object with nested array
const objectWithNestedArray = {
  gods: ["Zeus", "Arthemide", "Diana", "Bacchus"]
};
const objectWithNestedArrayCleaned = { gods: [] };
test("Clean object with nested Array", () => {
  expect(cleanObject(objectWithNestedArray)).toEqual(
    objectWithNestedArrayCleaned
  );
});

// Object with nested array of objects
const objectWithNestedArrayOfObjects = {
  employees: [
    { firstName: "Carlo", lastName: "Rossi" },
    { firstName: "Mario", lastName: "Bianchi" }
  ]
};
const objectWithNestedArrayOfObjectsCleaned = {
  employees: [{ firstName: null, lastName: null }]
};
test("Clean object with nested Array of Objects", () => {
  expect(cleanObject(objectWithNestedArrayOfObjects)).toEqual(
    objectWithNestedArrayOfObjectsCleaned
  );
});

// Complex Object with nested arrays of arrays of objects

const complexObject = {
  Job: {
    ID: "example",
    Name: "example",
    Type: "service",
    Priority: 50,
    Datacenters: ["dc1"],
    TaskGroups: [
      {
        Name: "cache",
        Count: 1,
        Migrate: {
          HealthCheck: "checks",
          HealthyDeadline: 300000000000,
          MaxParallel: 1,
          MinHealthyTime: 10000000000
        },
        Tasks: [
          {
            Name: "redis",
            Driver: "docker",
            User: "",
            Config: {
              image: "redis:3.2",
              port_map: [
                {
                  db: 6379
                }
              ]
            },
            Services: [
              {
                Id: "",
                Name: "redis-cache",
                Tags: ["global", "cache"],
                PortLabel: "db",
                AddressMode: "",
                Checks: [
                  {
                    Id: "",
                    Name: "alive",
                    Type: "tcp",
                    Command: "",
                    Args: null,
                    Header: {},
                    Method: "",
                    Path: "",
                    Protocol: "",
                    PortLabel: "",
                    Interval: 10000000000,
                    Timeout: 2000000000,
                    InitialStatus: "",
                    TLSSkipVerify: false,
                    CheckRestart: {
                      Limit: 3,
                      Grace: 30000000000,
                      IgnoreWarnings: false
                    }
                  }
                ]
              }
            ],
            Resources: {
              CPU: 500,
              MemoryMB: 256,
              Networks: [
                {
                  Device: "",
                  CIDR: "",
                  IP: "",
                  MBits: 10,
                  DynamicPorts: [
                    {
                      Label: "db",
                      Value: 0
                    }
                  ]
                }
              ]
            },
            Leader: false
          }
        ],
        RestartPolicy: {
          Interval: 1800000000000,
          Attempts: 2,
          Delay: 15000000000,
          Mode: "fail"
        },
        ReschedulePolicy: {
          Attempts: 10,
          Delay: 30000000000,
          DelayFunction: "exponential",
          Interval: 0,
          MaxDelay: 3600000000000,
          Unlimited: true
        },
        EphemeralDisk: {
          SizeMB: 300
        }
      }
    ],
    Update: {
      MaxParallel: 1,
      MinHealthyTime: 10000000000,
      HealthyDeadline: 180000000000,
      AutoRevert: false,
      Canary: 0
    }
  }
};
const complexObjectCleaned = {
  Job: {
    ID: null,
    Name: null,
    Type: null,
    Priority: null,
    Datacenters: [],
    TaskGroups: [
      {
        Name: null,
        Count: null,
        Migrate: {
          HealthCheck: null,
          HealthyDeadline: null,
          MaxParallel: null,
          MinHealthyTime: null
        },
        Tasks: [
          {
            Name: null,
            Driver: null,
            User: null,
            Config: {
              image: null,
              port_map: [
                {
                  db: null
                }
              ]
            },
            Services: [
              {
                Id: null,
                Name: null,
                Tags: [],
                PortLabel: null,
                AddressMode: null,
                Checks: [
                  {
                    Id: null,
                    Name: null,
                    Type: null,
                    Command: null,
                    Args: null,
                    Header: {},
                    Method: null,
                    Path: null,
                    Protocol: null,
                    PortLabel: null,
                    Interval: null,
                    Timeout: null,
                    InitialStatus: null,
                    TLSSkipVerify: null,
                    CheckRestart: {
                      Limit: null,
                      Grace: null,
                      IgnoreWarnings: null
                    }
                  }
                ]
              }
            ],
            Resources: {
              CPU: null,
              MemoryMB: null,
              Networks: [
                {
                  Device: null,
                  CIDR: null,
                  IP: null,
                  MBits: null,
                  DynamicPorts: [
                    {
                      Label: null,
                      Value: null
                    }
                  ]
                }
              ]
            },
            Leader: null
          }
        ],
        RestartPolicy: {
          Interval: null,
          Attempts: null,
          Delay: null,
          Mode: null
        },
        ReschedulePolicy: {
          Attempts: null,
          Delay: null,
          DelayFunction: null,
          Interval: null,
          MaxDelay: null,
          Unlimited: null
        },
        EphemeralDisk: {
          SizeMB: null
        }
      }
    ],
    Update: {
      MaxParallel: null,
      MinHealthyTime: null,
      HealthyDeadline: null,
      AutoRevert: null,
      Canary: null
    }
  }
};

test("Complex object with nested arrays of arrays of objects", () => {
  expect(cleanObject(complexObject)).toEqual(complexObjectCleaned);
});
