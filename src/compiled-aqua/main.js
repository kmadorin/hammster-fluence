/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function helloWorld(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const callProofGenerate_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "a") [] -a-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "b") [] -b-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "params_bytes") [] -params_bytes-arg-)
   )
   (new $answers
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $option-inline
             (seq
              (seq
               (new %Deal_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetwork" "local") %Deal_obj_map)
                      (ap ("chainNetworkId" 31337) %Deal_obj_map)
                     )
                     (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj_map)
                    )
                    (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj_map)
                   )
                   (ap ("definition" "bafkreibieaqoc2npx34woc5aqihzpfs6r77lxswbsdxcpjuf7b7zvo3sem") %Deal_obj_map)
                  )
                  (ap ("timestamp" "2024-04-02T20:17:31.567Z") %Deal_obj_map)
                 )
                 (canon %init_peer_id% %Deal_obj_map  Deal_obj)
                )
               )
               (xor
                (ap Deal_obj $option-inline)
                (null)
               )
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
            (new %Deals_obj_map
             (seq
              (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
              (canon %init_peer_id% %Deals_obj_map  Deals_obj)
             )
            )
           )
           (ap Deals_obj.$.myDeployment Deals_obj_flat)
          )
          (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
         )
         (xor
          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
          (fail :error:)
         )
        )
        (new -if-error-
         (xor
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (seq
           (ap :error: -if-error-)
           (xor
            (match :error:.$.error_code 10001
             (null)
            )
            (fail -if-error-)
           )
          )
         )
        )
       )
       (fold ret.$.workers w-0
        (seq
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (match w-0.$.worker_id []
              (seq
               (new %Answer_obj_map
                (seq
                 (seq
                  (ap ("answer" []) %Answer_obj_map)
                  (ap ("worker" w-0) %Answer_obj_map)
                 )
                 (canon %init_peer_id% %Answer_obj_map  Answer_obj)
                )
               )
               (ap Answer_obj $answers)
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10001
                (xor
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("myService" "proof_generate") [-a-arg- -b-arg- -params_bytes-arg-] ret-0)
                      )
                      (new $option-inline-1
                       (seq
                        (xor
                         (ap ret-0 $option-inline-1)
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                       )
                      )
                     )
                     (new %Answer_obj-0_map
                      (seq
                       (seq
                        (ap ("answer" #option-inline-1-0) %Answer_obj-0_map)
                        (ap ("worker" w-0) %Answer_obj-0_map)
                       )
                       (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                      )
                     )
                    )
                    (ap Answer_obj-0 $answers)
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (seq
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (ap -if-error- -if-else-error-)
                  )
                  (ap -else-error- -if-else-error-)
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
         (next w-0)
        )
        (null)
       )
      )
      (canon %init_peer_id% $answers  #-answers-fix-0)
     )
     (ap #-answers-fix-0 -answers-flat-0)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function callProofGenerate(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "callProofGenerate",
    "arrow": {
        "domain": {
            "fields": {
                "a": {
                    "type": {
                        "name": "u8",
                        "tag": "scalar"
                    },
                    "tag": "array"
                },
                "b": {
                    "type": {
                        "name": "u8",
                        "tag": "scalar"
                    },
                    "tag": "array"
                },
                "params_bytes": {
                    "type": {
                        "name": "u8",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        callProofGenerate_script
    );
}

export const callSetupParams_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $answers
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $option-inline
             (seq
              (seq
               (new %Deal_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetwork" "local") %Deal_obj_map)
                      (ap ("chainNetworkId" 31337) %Deal_obj_map)
                     )
                     (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj_map)
                    )
                    (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj_map)
                   )
                   (ap ("definition" "bafkreibieaqoc2npx34woc5aqihzpfs6r77lxswbsdxcpjuf7b7zvo3sem") %Deal_obj_map)
                  )
                  (ap ("timestamp" "2024-04-02T20:17:31.567Z") %Deal_obj_map)
                 )
                 (canon %init_peer_id% %Deal_obj_map  Deal_obj)
                )
               )
               (xor
                (ap Deal_obj $option-inline)
                (null)
               )
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
            (new %Deals_obj_map
             (seq
              (ap ("myDeployment" #option-inline-0) %Deals_obj_map)
              (canon %init_peer_id% %Deals_obj_map  Deals_obj)
             )
            )
           )
           (ap Deals_obj.$.myDeployment Deals_obj_flat)
          )
          (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
         )
         (xor
          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
          (fail :error:)
         )
        )
        (new -if-error-
         (xor
          (match ret.$.success false
           (seq
            (new $array-inline
             (seq
              (seq
               (ap "Failed to resolve subnet: " $array-inline)
               (ap ret.$.error $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
           )
          )
          (seq
           (ap :error: -if-error-)
           (xor
            (match :error:.$.error_code 10001
             (null)
            )
            (fail -if-error-)
           )
          )
         )
        )
       )
       (fold ret.$.workers w-0
        (seq
         (new -if-else-error-
          (new -else-error-
           (new -if-error-
            (xor
             (match w-0.$.worker_id []
              (seq
               (new %Answer_obj_map
                (seq
                 (seq
                  (ap ("answer" []) %Answer_obj_map)
                  (ap ("worker" w-0) %Answer_obj_map)
                 )
                 (canon %init_peer_id% %Answer_obj_map  Answer_obj)
                )
               )
               (ap Answer_obj $answers)
              )
             )
             (seq
              (ap :error: -if-error-)
              (xor
               (match :error:.$.error_code 10001
                (xor
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                        (new $-ephemeral-stream-
                         (new #-ephemeral-canon-
                          (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                         )
                        )
                       )
                       (call w-0.$.worker_id.[0] ("myService" "setup_params") [] ret-0)
                      )
                      (new $option-inline-1
                       (seq
                        (xor
                         (ap ret-0 $option-inline-1)
                         (null)
                        )
                        (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                       )
                      )
                     )
                     (new %Answer_obj-0_map
                      (seq
                       (seq
                        (ap ("answer" #option-inline-1-0) %Answer_obj-0_map)
                        (ap ("worker" w-0) %Answer_obj-0_map)
                       )
                       (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                      )
                     )
                    )
                    (ap Answer_obj-0 $answers)
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (seq
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.host_id $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
               (seq
                (seq
                 (ap :error: -else-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (ap -if-error- -if-else-error-)
                  )
                  (ap -else-error- -if-else-error-)
                 )
                )
                (fail -if-else-error-)
               )
              )
             )
            )
           )
          )
         )
         (next w-0)
        )
        (null)
       )
      )
      (canon %init_peer_id% $answers  #-answers-fix-1)
     )
     (ap #-answers-fix-1 -answers-flat-1)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function callSetupParams(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "callSetupParams",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        callSetupParams_script
    );
}
