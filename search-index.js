var searchIndex = {};
searchIndex["embedded_hal"] = {"doc":"A Hardware Abstraction Layer (HAL) for embedded systems","items":[[4,"Direction","embedded_hal","Count direction",null,null],[13,"Downcounting","","3, 2, 1",0,null],[13,"Upcounting","","1, 2, 3",0,null],[0,"blocking","","Blocking API",null,null],[0,"delay","embedded_hal::blocking","Delays",null,null],[8,"DelayMs","embedded_hal::blocking::delay","Millisecond delay",null,null],[10,"delay_ms","","Pauses execution for `ms` milliseconds",1,{"inputs":[{"name":"self"},{"name":"uxx"}],"output":null}],[8,"DelayUs","","Microsecond delay",null,null],[10,"delay_us","","Pauses execution for `us` microseconds",2,{"inputs":[{"name":"self"},{"name":"uxx"}],"output":null}],[0,"i2c","embedded_hal::blocking","Blocking I2C API",null,null],[8,"Read","embedded_hal::blocking::i2c","Blocking read",null,null],[16,"Error","","Error type",3,null],[10,"read","","Reads enough bytes from slave with `address` to fill `buffer`",3,null],[8,"Write","","Blocking write",null,null],[16,"Error","","Error type",4,null],[10,"write","","Sends bytes to slave with address `addr`",4,null],[8,"WriteRead","","Blocking write + read",null,null],[16,"Error","","Error type",5,null],[10,"write_read","","Sends bytes to slave with address `addr` and then reads enough bytes to fill `buffer` in a single transaction",5,null],[0,"serial","embedded_hal::blocking","Blocking serial API",null,null],[0,"write","embedded_hal::blocking::serial","Blocking serial write",null,null],[8,"Default","embedded_hal::blocking::serial::write","Marker trait to opt into default blocking write implementation",null,null],[8,"Write","embedded_hal::blocking::serial","Write half of a serial interface (blocking variant)",null,null],[16,"Error","","The type of error that can occur when writing",6,null],[10,"bwrite_all","","Writes a slice, blocking until everything has been written",6,null],[10,"bflush","","Block until the serial interface has sent all buffered words",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[0,"spi","embedded_hal::blocking","Blocking SPI API",null,null],[0,"transfer","embedded_hal::blocking::spi","Blocking transfer",null,null],[8,"Default","embedded_hal::blocking::spi::transfer","Default implementation of `blocking::spi::Transfer<W>` for implementers of `spi::FullDuplex<W>`",null,null],[0,"write","embedded_hal::blocking::spi","Blocking write",null,null],[8,"Default","embedded_hal::blocking::spi::write","Default implementation of `blocking::spi::Write<W>` for implementers of `spi::FullDuplex<W>`",null,null],[8,"Transfer","embedded_hal::blocking::spi","Blocking transfer",null,null],[16,"Error","","Error type",7,null],[10,"transfer","","Sends `words` to the slave. Returns the `words` received from the slave",7,null],[8,"Write","","Blocking write",null,null],[16,"Error","","Error type",8,null],[10,"write","","Sends `words` to the slave, ignoring all the incoming words",8,null],[0,"digital","embedded_hal","Digital I/O",null,null],[8,"OutputPin","embedded_hal::digital","Single digital output pin",null,null],[10,"is_high","","Is the output pin high?",9,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"is_low","","Is the output pin low?",9,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"set_low","","Sets the pin low",9,{"inputs":[{"name":"self"}],"output":null}],[10,"set_high","","Sets the pin high",9,{"inputs":[{"name":"self"}],"output":null}],[8,"InputPin","","Single digital input pin",null,null],[10,"is_high","","Is the input pin high?",10,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"is_low","","Is the input pin low?",10,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[0,"prelude","embedded_hal","The prelude is a collection of all the traits in this crate",null,null],[0,"serial","","Serial interface",null,null],[8,"Read","embedded_hal::serial","Read half of a serial interface",null,null],[16,"Error","","Read error",11,null],[10,"read","","Reads a single word from the serial interface",11,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[8,"Write","","Write half of a serial interface",null,null],[16,"Error","","Write error",12,null],[10,"write","","Writes a single word to the serial interface",12,{"inputs":[{"name":"self"},{"name":"word"}],"output":{"name":"result"}}],[10,"flush","","Ensures that none of the previously written words are still buffered",12,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[0,"spi","embedded_hal","Serial Peripheral Interface",null,null],[3,"Mode","embedded_hal::spi","SPI mode",null,null],[12,"polarity","","Clock polarity",13,null],[12,"phase","","Clock phase",13,null],[4,"Polarity","","Clock polarity",null,null],[13,"IdleLow","","Clock signal low when idle",14,null],[13,"IdleHigh","","Clock signal high when idle",14,null],[4,"Phase","","Clock phase",null,null],[13,"CaptureOnFirstTransition","","Data in \"captured\" on the first clock transition",15,null],[13,"CaptureOnSecondTransition","","Data in \"captured\" on the second clock transition",15,null],[8,"FullDuplex","","Full duplex (master mode)",null,null],[16,"Error","","An enumeration of SPI errors",16,null],[10,"read","","Reads the word stored in the shift register",16,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[10,"send","","Sends a word to the slave",16,{"inputs":[{"name":"self"},{"name":"word"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"polarity"}}],[11,"eq","","",14,{"inputs":[{"name":"self"},{"name":"polarity"}],"output":{"name":"bool"}}],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"phase"}}],[11,"eq","","",15,{"inputs":[{"name":"self"},{"name":"phase"}],"output":{"name":"bool"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"mode"}}],[11,"eq","","",13,{"inputs":[{"name":"self"},{"name":"mode"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"self"},{"name":"mode"}],"output":{"name":"bool"}}],[0,"timer","embedded_hal","Timers",null,null],[8,"CountDown","embedded_hal::timer","A count down timer",null,null],[16,"Time","","The unit of time used by this timer",17,null],[10,"start","","Starts a new count down",17,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[10,"wait","","Non-blockingly \"waits\" until the count down finishes",17,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[8,"Periodic","","Marker trait that indicates that a timer is periodic",null,null],[8,"Capture","embedded_hal","Input capture",null,null],[16,"Error","","Enumeration of `Capture` errors",18,null],[16,"Channel","","Enumeration of channels that can be used with this `Capture` interface",18,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",18,null],[16,"Capture","","The type of the value returned by `capture`",18,null],[10,"capture","","\"Waits\" for a transition in the capture `channel` and returns the value of counter at that instant",18,null],[10,"disable","","Disables a capture `channel`",18,null],[10,"enable","","Enables a capture `channel`",18,null],[10,"get_resolution","","Returns the current resolution",18,null],[10,"set_resolution","","Sets the resolution of the capture timer",18,{"inputs":[{"name":"self"},{"name":"r"}],"output":null}],[8,"Pwm","","Pulse Width Modulation",null,null],[16,"Channel","","Enumeration of channels that can be used with this `Pwm` interface",19,null],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",19,null],[16,"Duty","","Type for the `duty` methods",19,null],[10,"disable","","Disables a PWM `channel`",19,null],[10,"enable","","Enables a PWM `channel`",19,null],[10,"get_period","","Returns the current PWM period",19,null],[10,"get_duty","","Returns the current duty cycle",19,null],[10,"get_max_duty","","Returns the maximum duty cycle value",19,null],[10,"set_duty","","Sets a new duty cycle",19,null],[10,"set_period","","Sets a new PWM period",19,{"inputs":[{"name":"self"},{"name":"p"}],"output":null}],[8,"PwmPin","","A single PWM channel / pin",null,null],[16,"Duty","","Type for the `duty` methods",20,null],[10,"disable","","Disables a PWM `channel`",20,{"inputs":[{"name":"self"}],"output":null}],[10,"enable","","Enables a PWM `channel`",20,{"inputs":[{"name":"self"}],"output":null}],[10,"get_duty","","Returns the current duty cycle",20,null],[10,"get_max_duty","","Returns the maximum duty cycle value",20,null],[10,"set_duty","","Sets a new duty cycle",20,null],[8,"Qei","","Quadrature encoder interface",null,null],[16,"Count","","The type of the value returned by `count`",21,null],[10,"count","","Returns the current pulse count of the encoder",21,null],[10,"direction","","Returns the count direction",21,{"inputs":[{"name":"self"}],"output":{"name":"direction"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"direction"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"direction"}],"output":{"name":"bool"}}]],"paths":[[4,"Direction"],[8,"DelayMs"],[8,"DelayUs"],[8,"Read"],[8,"Write"],[8,"WriteRead"],[8,"Write"],[8,"Transfer"],[8,"Write"],[8,"OutputPin"],[8,"InputPin"],[8,"Read"],[8,"Write"],[3,"Mode"],[4,"Polarity"],[4,"Phase"],[8,"FullDuplex"],[8,"CountDown"],[8,"Capture"],[8,"Pwm"],[8,"PwmPin"],[8,"Qei"]]};
searchIndex["max31865"] = {"doc":"A generic driver for the MAX31865 RTD to Digital converter","items":[[3,"Max31865","max31865","",null,null],[4,"FilterMode","","",null,null],[13,"Filter60Hz","","",0,null],[13,"Filter50Hz","","",0,null],[4,"SensorType","","",null,null],[13,"TwoOrFourWire","","",1,null],[13,"ThreeWire","","",1,null],[0,"temp_conversion","","Temperature conversion table and lookup function",null,null],[5,"lookup_temperature","max31865::temp_conversion","Convert the specified PT100 resistance value into a temperature.",null,{"inputs":[{"name":"u16"}],"output":{"name":"u32"}}],[17,"MODE","max31865","",null,null],[11,"new","","Create a new MAX31865 module.",2,{"inputs":[{"name":"spi"},{"name":"ncs"},{"name":"rdy"}],"output":{"generics":["max31865"],"name":"result"}}],[11,"configure","","Updates the devices configuration.",2,{"inputs":[{"name":"self"},{"name":"bool"},{"name":"bool"},{"name":"bool"},{"name":"sensortype"},{"name":"filtermode"}],"output":{"name":"result"}}],[11,"set_calibration","","Set the calibration reference resistance. This can be used to calibrate inaccuracies of both the reference resistor  and the PT100 element.",2,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"read_default_conversion","","Read the raw resistance value and then perform conversion to degrees Celcius.",2,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[11,"read_raw","","Read the raw RTD value.",2,{"inputs":[{"name":"self"}],"output":{"generics":["u16"],"name":"result"}}],[11,"is_ready","","Determine if a new conversion is available",2,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}]],"paths":[[4,"FilterMode"],[4,"SensorType"],[3,"Max31865"]]};
searchIndex["nb"] = {"doc":"Minimal and reusable non-blocking I/O layer","items":[[4,"Error","nb","A non-blocking error",null,null],[13,"Other","","A different kind of error",0,null],[13,"WouldBlock","","This operation requires blocking behavior to complete",0,null],[6,"Result","","A non-blocking result",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"ordering"}}],[11,"hash","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"await","","Await operation (won't work until the language gains support for generators)",null,null],[14,"block","","Turns the non-blocking expression `$e` into a blocking operation.",null,null],[14,"try_nb","","Future adapter",null,null]],"paths":[[4,"Error"]]};
initSearch(searchIndex);