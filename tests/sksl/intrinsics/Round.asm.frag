OpCapability Shader
%1 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %_entrypoint_v "_entrypoint" %sk_FragColor %sk_Clockwise
OpExecutionMode %_entrypoint_v OriginUpperLeft
OpName %sk_FragColor "sk_FragColor"
OpName %sk_Clockwise "sk_Clockwise"
OpName %_UniformBuffer "_UniformBuffer"
OpMemberName %_UniformBuffer 0 "input"
OpMemberName %_UniformBuffer 1 "expected"
OpMemberName %_UniformBuffer 2 "colorGreen"
OpMemberName %_UniformBuffer 3 "colorRed"
OpName %_entrypoint_v "_entrypoint_v"
OpName %main "main"
OpDecorate %sk_FragColor RelaxedPrecision
OpDecorate %sk_FragColor Location 0
OpDecorate %sk_FragColor Index 0
OpDecorate %sk_Clockwise BuiltIn FrontFacing
OpMemberDecorate %_UniformBuffer 0 Offset 0
OpMemberDecorate %_UniformBuffer 0 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 1 Offset 16
OpMemberDecorate %_UniformBuffer 1 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 2 Offset 32
OpMemberDecorate %_UniformBuffer 2 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 3 Offset 48
OpMemberDecorate %_UniformBuffer 3 RelaxedPrecision
OpDecorate %_UniformBuffer Block
OpDecorate %10 Binding 0
OpDecorate %10 DescriptorSet 0
OpDecorate %27 RelaxedPrecision
OpDecorate %32 RelaxedPrecision
OpDecorate %33 RelaxedPrecision
OpDecorate %36 RelaxedPrecision
OpDecorate %37 RelaxedPrecision
OpDecorate %41 RelaxedPrecision
OpDecorate %43 RelaxedPrecision
OpDecorate %44 RelaxedPrecision
OpDecorate %46 RelaxedPrecision
OpDecorate %47 RelaxedPrecision
OpDecorate %54 RelaxedPrecision
OpDecorate %56 RelaxedPrecision
OpDecorate %57 RelaxedPrecision
OpDecorate %60 RelaxedPrecision
OpDecorate %61 RelaxedPrecision
OpDecorate %68 RelaxedPrecision
OpDecorate %70 RelaxedPrecision
OpDecorate %72 RelaxedPrecision
OpDecorate %81 RelaxedPrecision
OpDecorate %82 RelaxedPrecision
OpDecorate %88 RelaxedPrecision
OpDecorate %90 RelaxedPrecision
OpDecorate %91 RelaxedPrecision
OpDecorate %97 RelaxedPrecision
OpDecorate %99 RelaxedPrecision
OpDecorate %100 RelaxedPrecision
OpDecorate %107 RelaxedPrecision
OpDecorate %109 RelaxedPrecision
OpDecorate %120 RelaxedPrecision
OpDecorate %123 RelaxedPrecision
OpDecorate %124 RelaxedPrecision
%float = OpTypeFloat 32
%v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output
%bool = OpTypeBool
%_ptr_Input_bool = OpTypePointer Input %bool
%sk_Clockwise = OpVariable %_ptr_Input_bool Input
%_UniformBuffer = OpTypeStruct %v4float %v4float %v4float %v4float
%_ptr_Uniform__UniformBuffer = OpTypePointer Uniform %_UniformBuffer
%10 = OpVariable %_ptr_Uniform__UniformBuffer Uniform
%void = OpTypeVoid
%15 = OpTypeFunction %void
%v2float = OpTypeVector %float 2
%float_0 = OpConstant %float 0
%19 = OpConstantComposite %v2float %float_0 %float_0
%_ptr_Function_v2float = OpTypePointer Function %v2float
%23 = OpTypeFunction %v4float %_ptr_Function_v2float
%false = OpConstantFalse %bool
%_ptr_Uniform_v4float = OpTypePointer Uniform %v4float
%int = OpTypeInt 32 1
%int_0 = OpConstant %int 0
%int_1 = OpConstant %int 1
%v2bool = OpTypeVector %bool 2
%v3float = OpTypeVector %float 3
%v3bool = OpTypeVector %bool 3
%v4bool = OpTypeVector %bool 4
%float_n2 = OpConstant %float -2
%float_n0 = OpConstant %float -0
%88 = OpConstantComposite %v2float %float_n2 %float_n0
%97 = OpConstantComposite %v3float %float_n2 %float_n0 %float_0
%float_2 = OpConstant %float 2
%107 = OpConstantComposite %v4float %float_n2 %float_n0 %float_0 %float_2
%_ptr_Function_v4float = OpTypePointer Function %v4float
%int_2 = OpConstant %int 2
%int_3 = OpConstant %int 3
%_entrypoint_v = OpFunction %void None %15
%16 = OpLabel
%20 = OpVariable %_ptr_Function_v2float Function
OpStore %20 %19
%22 = OpFunctionCall %v4float %main %20
OpStore %sk_FragColor %22
OpReturn
OpFunctionEnd
%main = OpFunction %v4float None %23
%24 = OpFunctionParameter %_ptr_Function_v2float
%25 = OpLabel
%113 = OpVariable %_ptr_Function_v4float Function
%28 = OpAccessChain %_ptr_Uniform_v4float %10 %int_0
%32 = OpLoad %v4float %28
%33 = OpCompositeExtract %float %32 0
%27 = OpExtInst %float %1 Round %33
%34 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%36 = OpLoad %v4float %34
%37 = OpCompositeExtract %float %36 0
%38 = OpFOrdEqual %bool %27 %37
OpSelectionMerge %40 None
OpBranchConditional %38 %39 %40
%39 = OpLabel
%42 = OpAccessChain %_ptr_Uniform_v4float %10 %int_0
%43 = OpLoad %v4float %42
%44 = OpVectorShuffle %v2float %43 %43 0 1
%41 = OpExtInst %v2float %1 Round %44
%45 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%46 = OpLoad %v4float %45
%47 = OpVectorShuffle %v2float %46 %46 0 1
%48 = OpFOrdEqual %v2bool %41 %47
%50 = OpAll %bool %48
OpBranch %40
%40 = OpLabel
%51 = OpPhi %bool %false %25 %50 %39
OpSelectionMerge %53 None
OpBranchConditional %51 %52 %53
%52 = OpLabel
%55 = OpAccessChain %_ptr_Uniform_v4float %10 %int_0
%56 = OpLoad %v4float %55
%57 = OpVectorShuffle %v3float %56 %56 0 1 2
%54 = OpExtInst %v3float %1 Round %57
%59 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%60 = OpLoad %v4float %59
%61 = OpVectorShuffle %v3float %60 %60 0 1 2
%62 = OpFOrdEqual %v3bool %54 %61
%64 = OpAll %bool %62
OpBranch %53
%53 = OpLabel
%65 = OpPhi %bool %false %40 %64 %52
OpSelectionMerge %67 None
OpBranchConditional %65 %66 %67
%66 = OpLabel
%69 = OpAccessChain %_ptr_Uniform_v4float %10 %int_0
%70 = OpLoad %v4float %69
%68 = OpExtInst %v4float %1 Round %70
%71 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%72 = OpLoad %v4float %71
%73 = OpFOrdEqual %v4bool %68 %72
%75 = OpAll %bool %73
OpBranch %67
%67 = OpLabel
%76 = OpPhi %bool %false %53 %75 %66
OpSelectionMerge %78 None
OpBranchConditional %76 %77 %78
%77 = OpLabel
%80 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%81 = OpLoad %v4float %80
%82 = OpCompositeExtract %float %81 0
%83 = OpFOrdEqual %bool %float_n2 %82
OpBranch %78
%78 = OpLabel
%84 = OpPhi %bool %false %67 %83 %77
OpSelectionMerge %86 None
OpBranchConditional %84 %85 %86
%85 = OpLabel
%89 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%90 = OpLoad %v4float %89
%91 = OpVectorShuffle %v2float %90 %90 0 1
%92 = OpFOrdEqual %v2bool %88 %91
%93 = OpAll %bool %92
OpBranch %86
%86 = OpLabel
%94 = OpPhi %bool %false %78 %93 %85
OpSelectionMerge %96 None
OpBranchConditional %94 %95 %96
%95 = OpLabel
%98 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%99 = OpLoad %v4float %98
%100 = OpVectorShuffle %v3float %99 %99 0 1 2
%101 = OpFOrdEqual %v3bool %97 %100
%102 = OpAll %bool %101
OpBranch %96
%96 = OpLabel
%103 = OpPhi %bool %false %86 %102 %95
OpSelectionMerge %105 None
OpBranchConditional %103 %104 %105
%104 = OpLabel
%108 = OpAccessChain %_ptr_Uniform_v4float %10 %int_1
%109 = OpLoad %v4float %108
%110 = OpFOrdEqual %v4bool %107 %109
%111 = OpAll %bool %110
OpBranch %105
%105 = OpLabel
%112 = OpPhi %bool %false %96 %111 %104
OpSelectionMerge %117 None
OpBranchConditional %112 %115 %116
%115 = OpLabel
%118 = OpAccessChain %_ptr_Uniform_v4float %10 %int_2
%120 = OpLoad %v4float %118
OpStore %113 %120
OpBranch %117
%116 = OpLabel
%121 = OpAccessChain %_ptr_Uniform_v4float %10 %int_3
%123 = OpLoad %v4float %121
OpStore %113 %123
OpBranch %117
%117 = OpLabel
%124 = OpLoad %v4float %113
OpReturnValue %124
OpFunctionEnd
