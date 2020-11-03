

/**************************************************************************************************
 *** This file was autogenerated from GrGrSLTypesAreSupported.fp; do not modify.
 **************************************************************************************************/
#include "GrGrSLTypesAreSupported.h"

#include "src/core/SkUtils.h"
#include "src/gpu/GrTexture.h"
#include "src/gpu/glsl/GrGLSLFragmentProcessor.h"
#include "src/gpu/glsl/GrGLSLFragmentShaderBuilder.h"
#include "src/gpu/glsl/GrGLSLProgramBuilder.h"
#include "src/sksl/SkSLCPP.h"
#include "src/sksl/SkSLUtil.h"
class GrGLSLGrSLTypesAreSupported : public GrGLSLFragmentProcessor {
public:
    GrGLSLGrSLTypesAreSupported() {}
    void emitCode(EmitArgs& args) override {
        GrGLSLFPFragmentBuilder* fragBuilder = args.fFragBuilder;
        const GrGrSLTypesAreSupported& _outer = args.fFp.cast<GrGrSLTypesAreSupported>();
        (void) _outer;
        SkString test_i_name = fragBuilder->getMangledFunctionName("test_i");
        const GrShaderVar test_i_args[] = { GrShaderVar("a", kInt_GrSLType) };
        SkString test_i2_name = fragBuilder->getMangledFunctionName("test_i2");
        const GrShaderVar test_i2_args[] = { GrShaderVar("a", kInt2_GrSLType) };
        SkString test_i3_name = fragBuilder->getMangledFunctionName("test_i3");
        const GrShaderVar test_i3_args[] = { GrShaderVar("a", kInt3_GrSLType) };
        SkString test_i4_name = fragBuilder->getMangledFunctionName("test_i4");
        const GrShaderVar test_i4_args[] = { GrShaderVar("a", kInt4_GrSLType) };
        SkString test_h3x4_name = fragBuilder->getMangledFunctionName("test_h3x4");
        const GrShaderVar test_h3x4_args[] = { GrShaderVar("a", kHalf3x4_GrSLType) };
        SkString test_f2x4_name = fragBuilder->getMangledFunctionName("test_f2x4");
        const GrShaderVar test_f2x4_args[] = { GrShaderVar("a", kFloat2x4_GrSLType) };
        fragBuilder->emitFunction(kInt_GrSLType, test_i_name.c_str(), {test_i_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->emitFunction(kInt2_GrSLType, test_i2_name.c_str(), {test_i2_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->emitFunction(kInt3_GrSLType, test_i3_name.c_str(), {test_i3_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->emitFunction(kInt4_GrSLType, test_i4_name.c_str(), {test_i4_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->emitFunction(kHalf3x4_GrSLType, test_h3x4_name.c_str(), {test_h3x4_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->emitFunction(kFloat2x4_GrSLType, test_f2x4_name.c_str(), {test_f2x4_args, 1},
R"SkSL(for (; ; ) {
    return a;
}
)SkSL");
        fragBuilder->codeAppendf(
R"SkSL(%s = half4(int4(%s(1)));
%s = half4(%s(int2(1)).xxxx);
%s = half4(%s(int3(1)).xxxx);
%s = half4(%s(int4(1)).xxxx);
%s = %s(half3x4(1.0))[0];
%s = half4(%s(float2x4(1.0))[0]);
)SkSL"
, args.fOutputColor, test_i_name.c_str(), args.fOutputColor, test_i2_name.c_str(), args.fOutputColor, test_i3_name.c_str(), args.fOutputColor, test_i4_name.c_str(), args.fOutputColor, test_h3x4_name.c_str(), args.fOutputColor, test_f2x4_name.c_str());
    }
private:
    void onSetData(const GrGLSLProgramDataManager& pdman, const GrFragmentProcessor& _proc) override {
    }
};
GrGLSLFragmentProcessor* GrGrSLTypesAreSupported::onCreateGLSLInstance() const {
    return new GrGLSLGrSLTypesAreSupported();
}
void GrGrSLTypesAreSupported::onGetGLSLProcessorKey(const GrShaderCaps& caps, GrProcessorKeyBuilder* b) const {
}
bool GrGrSLTypesAreSupported::onIsEqual(const GrFragmentProcessor& other) const {
    const GrGrSLTypesAreSupported& that = other.cast<GrGrSLTypesAreSupported>();
    (void) that;
    return true;
}
bool GrGrSLTypesAreSupported::usesExplicitReturn() const {
    return false;
}
GrGrSLTypesAreSupported::GrGrSLTypesAreSupported(const GrGrSLTypesAreSupported& src)
: INHERITED(kGrGrSLTypesAreSupported_ClassID, src.optimizationFlags()) {
        this->cloneAndRegisterAllChildProcessors(src);
}
std::unique_ptr<GrFragmentProcessor> GrGrSLTypesAreSupported::clone() const {
    return std::make_unique<GrGrSLTypesAreSupported>(*this);
}
#if GR_TEST_UTILS
SkString GrGrSLTypesAreSupported::onDumpInfo() const {
    return SkString();
}
#endif
