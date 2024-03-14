//This file is automatically rebuilt by the Cesium build process.
export default "/* Cylinder defines (set in Scene/VoxelCylinderShape.js)\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_RADIUS\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_HEIGHT\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_ANGLE\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_DISCONTINUITY\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MAX_DISCONTINUITY\n\
#define CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_MAX_REVERSED\n\
*/\n\
\n\
#if defined(CYLINDER_HAS_SHAPE_BOUNDS_RADIUS)\n\
    uniform vec2 u_cylinderUvToShapeUvRadius; // x = scale, y = offset\n\
#endif\n\
#if defined(CYLINDER_HAS_SHAPE_BOUNDS_HEIGHT)\n\
    uniform vec2 u_cylinderUvToShapeUvHeight; // x = scale, y = offset\n\
#endif\n\
#if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE)\n\
    uniform vec2 u_cylinderUvToShapeUvAngle; // x = scale, y = offset\n\
#endif\n\
#if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_DISCONTINUITY) || defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MAX_DISCONTINUITY)\n\
    uniform vec2 u_cylinderShapeUvAngleMinMax;\n\
#endif\n\
#if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_DISCONTINUITY) || defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MAX_DISCONTINUITY) || defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_MAX_REVERSED)\n\
    uniform float u_cylinderShapeUvAngleRangeZeroMid;\n\
#endif\n\
\n\
vec3 convertUvToShapeUvSpace(in vec3 positionUv) {\n\
    vec3 positionLocal = positionUv * 2.0 - 1.0; // [-1,+1]\n\
\n\
    float radius = length(positionLocal.xy); // [0,1]\n\
    #if defined(CYLINDER_HAS_SHAPE_BOUNDS_RADIUS)\n\
        radius = radius * u_cylinderUvToShapeUvRadius.x + u_cylinderUvToShapeUvRadius.y; // x = scale, y = offset\n\
    #endif\n\
\n\
    float height = positionUv.z; // [0,1]\n\
    #if defined(CYLINDER_HAS_SHAPE_BOUNDS_HEIGHT)\n\
        height = height * u_cylinderUvToShapeUvHeight.x + u_cylinderUvToShapeUvHeight.y; // x = scale, y = offset\n\
    #endif\n\
\n\
    float angle = (atan(positionLocal.y, positionLocal.x) + czm_pi) / czm_twoPi; // [0,1]\n\
    #if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE)\n\
        #if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_MAX_REVERSED)\n\
            // Comparing against u_cylinderShapeUvAngleMinMax has precision problems. u_cylinderShapeUvAngleRangeZeroMid is more conservative.\n\
            angle += float(angle < u_cylinderShapeUvAngleRangeZeroMid);\n\
        #endif\n\
\n\
        // Avoid flickering from reading voxels from both sides of the -pi/+pi discontinuity.\n\
        #if defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MIN_DISCONTINUITY)\n\
            angle = angle > u_cylinderShapeUvAngleRangeZeroMid ? u_cylinderShapeUvAngleMinMax.x : angle;\n\
        #elif defined(CYLINDER_HAS_SHAPE_BOUNDS_ANGLE_MAX_DISCONTINUITY)\n\
            angle = angle < u_cylinderShapeUvAngleRangeZeroMid ? u_cylinderShapeUvAngleMinMax.y : angle;\n\
        #endif\n\
\n\
        angle = angle * u_cylinderUvToShapeUvAngle.x + u_cylinderUvToShapeUvAngle.y; // x = scale, y = offset\n\
    #endif\n\
\n\
    return vec3(radius, height, angle);\n\
}\n\
";
